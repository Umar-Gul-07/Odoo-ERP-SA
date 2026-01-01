/**
 * ============================================================================
 * MIDDLEWARES/SECURITY.JS - SECURITY MIDDLEWARES
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Configures all security-related middlewares
 * - Protects against common web attacks
 * - Exports configured middlewares for use in app.js
 * 
 * FILE CONNECTIONS:
 * - Used by: app.js (imported and applied to Express app)
 * - Uses: env.js (reads CORS and rate limit config)
 * 
 * SECURITY LAYERS:
 * 1. Helmet - HTTP security headers
 * 2. CORS - Cross-origin resource sharing
 * 3. Rate Limiting - Prevents brute force attacks
 * 4. XSS Clean - Prevents cross-site scripting
 * 5. HPP - Prevents HTTP parameter pollution
 * 
 * NOTE: No MongoDB sanitization needed for SQLite
 * SQL injection is prevented by using prepared statements (better-sqlite3 does this automatically)
 * 
 * LIBRARIES USED:
 * - helmet: Sets security HTTP headers (prevents clickjacking, XSS, etc.)
 * - express-rate-limit: Limits requests per IP (prevents DDoS, brute force)
 * - xss-clean: Removes HTML/JavaScript from user input
 * - hpp: Prevents duplicate parameters in query strings
 * - cors: Handles cross-origin requests (allows/denies requests from other domains)
 */

import helmet from "helmet"; // Sets security HTTP headers
import rateLimit from "express-rate-limit"; // Rate limiting middleware
import xss from "xss-clean"; // XSS attack prevention
import hpp from "hpp"; // HTTP parameter pollution prevention
import cors from "cors"; // Cross-origin resource sharing
import env from "../config/env.js"; // Environment variables

/**
 * ============================================================================
 * SECURITY MIDDLEWARE CONFIGURATIONS
 * ============================================================================
 */

/**
 * Helmet - Sets various HTTP headers for security
 * 
 * WHAT IT DOES:
 * - Sets Content-Security-Policy (prevents XSS)
 * - Sets X-Frame-Options (prevents clickjacking)
 * - Sets X-Content-Type-Options (prevents MIME sniffing)
 * - Removes X-Powered-By header (hides that you're using Express)
 * 
 * WHY NEEDED:
 * - Browsers read these headers and apply security rules
 * - Prevents common attacks before they reach your code
 */
export const helmetMiddleware = helmet({
  // Content Security Policy - Controls what resources can be loaded
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], // Only load from same origin
      styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles
      scriptSrc: ["'self'"], // Only load scripts from same origin
      imgSrc: ["'self'", "data:", "https:"], // Allow images from same origin, data URLs, and HTTPS
    },
  },
  crossOriginEmbedderPolicy: false, // Disabled for compatibility
});

/**
 * CORS Configuration - Cross-Origin Resource Sharing
 * 
 * WHAT IT DOES:
 * - Controls which websites can make requests to your API
 * - Prevents unauthorized websites from accessing your API
 * 
 * EXAMPLE:
 * - Frontend at http://localhost:3000 wants to call API at http://localhost:5000
 * - Without CORS: Browser blocks the request (security feature)
 * - With CORS: Browser allows the request
 * 
 * CONFIGURATION:
 * - origin: Which domains can access your API (* = all, or specific URLs)
 * - credentials: Allows cookies/auth headers to be sent
 * - methods: Which HTTP methods are allowed
 * - allowedHeaders: Which headers can be sent
 */
export const corsMiddleware = cors({
  origin: env.CORS_ORIGIN === "*" ? "*" : env.CORS_ORIGIN.split(","), // Allowed origins
  credentials: true, // Allow cookies/auth headers
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Allowed headers
});

/**
 * Rate Limiting - Prevent brute force attacks
 * 
 * WHAT IT DOES:
 * - Limits how many requests an IP can make in a time window
 * - Prevents DDoS attacks (too many requests)
 * - Prevents brute force attacks (trying many passwords)
 * 
 * EXAMPLE:
 * - Window: 15 minutes
 * - Max: 100 requests
 * - If IP makes 101 requests in 15 minutes → blocked
 * 
 * WHY NEEDED:
 * - Without this, attackers can spam your API
 * - Can crash your server with too many requests
 */
export const rateLimiter = rateLimit({
  windowMs: parseInt(env.RATE_LIMIT_WINDOW_MS), // Time window (15 minutes = 900000ms)
  max: parseInt(env.RATE_LIMIT_MAX_REQUESTS), // Max requests per window (100)
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Don't use old header format
});

/**
 * Strict Rate Limiter for authentication routes
 * 
 * MORE STRICT than general rate limiter
 * - Only 5 login attempts per 15 minutes
 * - Prevents password guessing attacks
 * 
 * Used specifically for: /login, /register, /forgot-password routes
 */
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Only 5 attempts (much stricter!)
  message: {
    success: false,
    message: "Too many authentication attempts, please try again later.",
  },
  skipSuccessfulRequests: true, // Don't count successful logins
});

/**
 * XSS Protection - Clean user input
 * 
 * WHAT IT DOES:
 * - Removes HTML and JavaScript from user input
 * - Prevents cross-site scripting attacks
 * 
 * EXAMPLE ATTACK:
 * - User submits: <script>alert('XSS')</script>
 * - Without XSS protection: Script runs in browser
 * - With XSS protection: Script is removed/escaped
 * 
 * WHY NEEDED:
 * - Prevents attackers from injecting malicious code
 * - Protects other users viewing the data
 */
export const xssMiddleware = xss();

/**
 * HTTP Parameter Pollution Protection
 * 
 * WHAT IT DOES:
 * - Prevents duplicate parameters in query strings
 * - Keeps only the last value
 * 
 * EXAMPLE ATTACK:
 * - URL: ?sort=name&sort=email
 * - Without HPP: Both values might be used (confusing)
 * - With HPP: Only last value used (sort=email)
 * 
 * WHITELIST:
 * - Some parameters are allowed to be duplicated (like sort, page, limit)
 * - These are common in pagination/filtering
 */
export const hppMiddleware = hpp({
  whitelist: ["sort", "page", "limit", "fields"], // Allowed duplicate parameters
});

