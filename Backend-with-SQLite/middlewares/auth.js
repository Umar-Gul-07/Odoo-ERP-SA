/**
 * ============================================================================
 * MIDDLEWARES/AUTH.JS - AUTHENTICATION & AUTHORIZATION
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Verifies JWT tokens (checks if user is logged in)
 * - Attaches user info to request object
 * - Checks user roles (admin, user, etc.)
 * 
 * FILE CONNECTIONS:
 * - Used by: routes (protect routes that need authentication)
 * - Uses: generateToken.js (creates tokens), responseHandler.js (sends errors)
 * - Uses: env.js (JWT secret for verification)
 * 
 * AUTHENTICATION vs AUTHORIZATION:
 * - Authentication (protect): "Are you logged in?"
 * - Authorization (authorize): "Do you have permission?" (admin, user, etc.)
 * 
 * LIBRARIES USED:
 * - jsonwebtoken: Creates and verifies JWT tokens
 *   - JWT = JSON Web Token (secure way to store user info)
 *   - Token contains: user ID, role, expiration time
 *   - Signed with secret key (only server can verify)
 * 
 * HOW JWT WORKS:
 * 1. User logs in → Server creates JWT token
 * 2. Server sends token to client
 * 3. Client stores token (localStorage, cookie)
 * 4. Client sends token with every request (in Authorization header)
 * 5. Server verifies token → If valid, user is authenticated
 */

import jwt from "jsonwebtoken"; // JWT library for creating/verifying tokens
import asyncHandler from "../utils/asyncHandler.js"; // Wraps async functions to catch errors
import { sendError } from "../utils/responseHandler.js"; // Sends error responses
import env from "../config/env.js"; // JWT secret from environment

/**
 * ============================================================================
 * PROTECT MIDDLEWARE - Authentication
 * ============================================================================
 * 
 * WHAT IT DOES:
 * - Checks if request has valid JWT token
 * - Verifies token signature
 * - Attaches user info to req.user
 * 
 * HOW TO USE:
 * router.get("/protected", protect, handler)
 * 
 * FLOW:
 * 1. Extract token from Authorization header or cookie
 * 2. If no token → return 401 error
 * 3. Verify token with JWT secret
 * 4. If invalid → return 401 error
 * 5. If valid → attach user to req.user and continue
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  /**
   * Extract token from request
   * 
   * Tokens can be sent in two ways:
   * 1. Authorization header: "Bearer <token>"
   * 2. Cookie: req.cookies.token
   */
  
  // Check for token in Authorization header
  // Format: Authorization: Bearer <token>
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]; // Extract token (after "Bearer ")
  }
  // Check for token in cookies
  else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // If no token found, user is not authenticated
  if (!token) {
    return sendError(res, 401, "Not authorized, no token provided");
  }

  try {
    /**
     * Verify JWT token
     * 
     * jwt.verify() checks:
     * - Is token signed with correct secret? (prevents tampering)
     * - Is token expired? (checks expiration time)
     * - Is token format valid? (checks structure)
     * 
     * Returns decoded token payload (user ID, role, etc.)
     */
    const decoded = jwt.verify(token, env.JWT_SECRET);
    
    /**
     * Attach user info to request
     * 
     * Now all subsequent middlewares/routes can access:
     * - req.user.id (user ID - integer for SQLite)
     * - req.user.role (user role)
     * - etc.
     * 
     * TODO: You can fetch full user from database:
     * const user = db.prepare("SELECT * FROM users WHERE id = ?").get(decoded.id);
     * req.user = user;
     */
    req.user = decoded; // For now, just attach decoded token
    
    next(); // Continue to next middleware/route
  } catch (error) {
    // Token is invalid (expired, tampered, wrong secret)
    return sendError(res, 401, "Not authorized, token failed");
  }
});

/**
 * ============================================================================
 * AUTHORIZE MIDDLEWARE - Authorization (Role-based)
 * ============================================================================
 * 
 * WHAT IT DOES:
 * - Checks if user has required role
 * - Must be used AFTER protect middleware
 * 
 * HOW TO USE:
 * router.get("/admin", protect, authorize("admin"), handler)
 * router.get("/moderator", protect, authorize("admin", "moderator"), handler)
 * 
 * FLOW:
 * 1. Check if req.user exists (must use protect first)
 * 2. Check if user's role is in allowed roles
 * 3. If not → return 403 error (forbidden)
 * 4. If yes → continue
 * 
 * EXAMPLE:
 * - User with role "user" tries to access admin route
 * - authorize("admin") checks: "user" !== "admin"
 * - Returns 403 Forbidden
 */
export const authorize = (...roles) => {
  /**
   * Returns a middleware function
   * 
   * ...roles = rest parameter (allows multiple roles)
   * Example: authorize("admin", "moderator") → roles = ["admin", "moderator"]
   */
  return (req, res, next) => {
    // Check if user is authenticated (protect middleware must run first)
    if (!req.user) {
      return sendError(res, 401, "Not authorized");
    }

    // Check if user's role is in allowed roles
    if (!roles.includes(req.user.role)) {
      return sendError(res, 403, `User role '${req.user.role}' is not authorized to access this route`);
    }

    // User has required role, continue
    next();
  };
};

