/**
 * ============================================================================
 * MIDDLEWARES/ERRORHANDLER.JS - GLOBAL ERROR HANDLER
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Catches ALL errors from routes/controllers
 * - Formats errors into consistent JSON responses
 * - Logs errors for debugging
 * - Handles different error types (SQLite, JWT, validation, etc.)
 * 
 * FILE CONNECTIONS:
 * - Used by: app.js (last middleware - catches everything)
 * - Uses: logger.js (logs errors), responseHandler.js (sends error responses)
 * 
 * HOW IT WORKS:
 * 1. Error thrown in route/controller
 * 2. asyncHandler catches it → calls next(error)
 * 3. Express passes error to errorHandler (last middleware)
 * 4. errorHandler formats error → sends response
 * 
 * ERROR TYPES HANDLED:
 * - SQLite errors: Database constraint violations, syntax errors
 * - JsonWebTokenError: Invalid JWT token (401)
 * - TokenExpiredError: JWT token expired (401)
 * - Validation errors: Express-validator errors (400)
 * - Generic errors: Everything else (500)
 */

import logger from "../utils/logger.js"; // Logger for error logging
import { sendError } from "../utils/responseHandler.js"; // Sends error responses

/**
 * Global Error Handler Middleware
 * 
 * This is the LAST middleware in app.js
 * It catches ALL errors that weren't handled elsewhere
 * 
 * Express signature: (err, req, res, next) => {}
 * - err: The error object
 * - req: Request object
 * - res: Response object
 * - next: Next middleware (not used here, this is the end)
 */
const errorHandler = (err, req, res, next) => {
  // Copy error object (don't modify original)
  let error = { ...err };
  error.message = err.message;

  // Log error for debugging
  // This writes to logs/error.log and console
  logger.error(err);

  /**
   * ========================================================================
   * HANDLE SPECIFIC ERROR TYPES
   * ========================================================================
   * 
   * Different errors need different status codes and messages
   */

  /**
   * SQLite Constraint Errors
   * 
   * Occurs when: Database constraint violation
   * Examples:
   * - UNIQUE constraint: Trying to insert duplicate value
   * - NOT NULL constraint: Trying to insert null in required field
   * - FOREIGN KEY constraint: Referenced record doesn't exist
   * 
   * SQLite error codes:
   * - 19: SQLITE_CONSTRAINT (general constraint violation)
   * - 2067: SQLITE_CONSTRAINT_UNIQUE (unique constraint)
   * - 1299: SQLITE_CONSTRAINT_NOTNULL (not null constraint)
   * 
   * Response: 400 Bad Request
   */
  if (err.code === "SQLITE_CONSTRAINT" || err.code === 19) {
    let message = "Database constraint violation";
    
    // Check for specific constraint types
    if (err.message.includes("UNIQUE")) {
      const field = err.message.match(/UNIQUE constraint failed: (\w+\.\w+)/)?.[1] || "field";
      message = `${field} already exists`;
    } else if (err.message.includes("NOT NULL")) {
      const field = err.message.match(/NOT NULL constraint failed: (\w+\.\w+)/)?.[1] || "field";
      message = `${field} is required`;
    } else if (err.message.includes("FOREIGN KEY")) {
      message = "Referenced record does not exist";
    }
    
    error = { message, statusCode: 400 };
  }

  /**
   * SQLite Syntax Errors
   * 
   * Occurs when: Invalid SQL syntax
   * Example: Malformed SQL query
   * 
   * Response: 500 Internal Server Error
   */
  if (err.code === "SQLITE_ERROR" || err.message.includes("SQLITE_ERROR")) {
    const message = "Database error occurred";
    error = { message, statusCode: 500 };
  }

  /**
   * JWT Errors
   * 
   * JsonWebTokenError: Invalid token (wrong signature, malformed)
   * TokenExpiredError: Token has expired
   * 
   * Response: 401 Unauthorized
   */
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token";
    error = { message, statusCode: 401 };
  }

  if (err.name === "TokenExpiredError") {
    const message = "Token expired";
    error = { message, statusCode: 401 };
  }

  /**
   * Express Validator Errors
   * 
   * Occurs when: Request validation fails
   * Example: Invalid email format, missing required field
   * 
   * Response: 400 Bad Request with detailed errors
   */
  if (err.type === "validation") {
    return sendError(res, 400, "Validation Error", err.errors);
  }

  /**
   * ========================================================================
   * SEND ERROR RESPONSE
   * ========================================================================
   */

  // Get status code (from error or default to 500)
  const statusCode = error.statusCode || 500;
  
  // Get error message (from error or default)
  const message = error.message || "Internal Server Error";

  /**
   * Security: Don't leak error details in production
   * 
   * In production, don't show detailed error messages for 500 errors
   * This prevents attackers from learning about your system
   * 
   * Example:
   * - Development: "Cannot read property 'name' of undefined"
   * - Production: "Internal Server Error"
   */
  const errorMessage = process.env.NODE_ENV === "production" && statusCode === 500 
    ? "Internal Server Error" 
    : message;

  // Send formatted error response
  sendError(res, statusCode, errorMessage);
};

export default errorHandler;

