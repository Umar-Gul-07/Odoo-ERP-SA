/**
 * ============================================================================
 * UTILS/VALIDATORS.JS - REQUEST VALIDATION
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Validates request data (body, params, query)
 * - Provides reusable validation rules
 * - Formats validation errors
 * 
 * FILE CONNECTIONS:
 * - Used by: Routes (validates input before processing)
 * - Uses: responseHandler.js (sends validation errors)
 * 
 * WHY VALIDATION?
 * - Prevents invalid data from reaching database
 * - Provides clear error messages to users
 * - Security: Prevents malicious input
 * 
 * LIBRARIES USED:
 * - express-validator: Request validation library
 *   - Validates body, params, query strings
 *   - Provides many built-in validators (email, length, etc.)
 *   - Customizable error messages
 * 
 * HOW TO USE:
 * 
 * router.post("/", [
 *   body("email").isEmail(),
 *   body("password").isLength({ min: 8 }),
 *   validate, // This middleware checks validation results
 * ], handler);
 */

import { body, param, query, validationResult } from "express-validator"; // Validation library
import { sendError } from "./responseHandler.js"; // Error response handler

/**
 * Validation Result Handler Middleware
 * 
 * WHAT IT DOES:
 * - Checks if validation passed
 * - If failed: Sends formatted error response
 * - If passed: Continues to next middleware
 * 
 * HOW IT WORKS:
 * 1. express-validator runs validation rules
 * 2. Results stored in req object
 * 3. validate() middleware checks results
 * 4. If errors found → send error response
 * 5. If no errors → continue to route handler
 * 
 * MUST BE PLACED AFTER validation rules:
 * router.post("/", [
 *   body("email").isEmail(), // Validation rule
 *   validate, // Check results (must be last)
 * ], handler);
 */
export const validate = (req, res, next) => {
  /**
   * Get validation results
   * 
   * validationResult() extracts errors from req object
   * (express-validator stores them there)
   */
  const errors = validationResult(req);
  
  // If validation failed, send error response
  if (!errors.isEmpty()) {
    return sendError(
      res,
      400, // Bad Request
      "Validation failed",
      // Format errors for response
      errors.array().map((err) => ({
        field: err.path || err.param, // Field name (email, password, etc.)
        message: err.msg, // Error message
      }))
    );
  }
  
  // Validation passed, continue to next middleware
  next();
};

/**
 * Common Validation Rules
 * 
 * Reusable validation functions
 * Use these instead of writing validation from scratch
 * 
 * EXAMPLE:
 * router.post("/", [
 *   commonValidators.email("email"),
 *   commonValidators.password("password"),
 *   validate,
 * ], handler);
 */
export const commonValidators = {
  /**
   * Integer ID Validation (for SQLite)
   * 
   * Validates that a URL parameter is a valid integer ID
   * SQLite uses INTEGER PRIMARY KEY for IDs (not ObjectId like MongoDB)
   * 
   * @param {String} field - Parameter name (default: "id")
   * @returns {Validator} - Express-validator rule
   * 
   * EXAMPLE:
   * router.get("/:id", [
   *   commonValidators.intId("id"),
   *   validate,
   * ], handler);
   */
  intId: (field = "id") => param(field).isInt({ min: 1 }).withMessage("Invalid ID format"),

  /**
   * Pagination Validation
   * 
   * Validates pagination query parameters
   * - page: Must be positive integer (default: 1)
   * - limit: Must be between 1 and 100 (default: 10)
   * 
   * EXAMPLE:
   * router.get("/", [
   *   ...commonValidators.pagination,
   *   validate,
   * ], handler);
   * 
   * URL: /api/users?page=1&limit=10
   */
  pagination: [
    query("page").optional().isInt({ min: 1 }).withMessage("Page must be a positive integer"),
    query("limit").optional().isInt({ min: 1, max: 100 }).withMessage("Limit must be between 1 and 100"),
  ],

  /**
   * Email Validation
   * 
   * Validates email format and normalizes it
   * - Checks format (user@domain.com)
   * - Normalizes (removes spaces, converts to lowercase)
   * 
   * @param {String} field - Field name (default: "email")
   * @returns {Validator} - Express-validator rule
   * 
   * EXAMPLE:
   * router.post("/", [
   *   commonValidators.email("email"),
   *   validate,
   * ], handler);
   */
  email: (field = "email") => body(field).isEmail().normalizeEmail().withMessage("Invalid email format"),

  /**
   * Password Validation
   * 
   * Validates password strength:
   * - Minimum length (default: 8 characters)
   * - Must contain uppercase letter
   * - Must contain lowercase letter
   * - Must contain number
   * 
   * @param {String} field - Field name (default: "password")
   * @param {Number} minLength - Minimum length (default: 8)
   * @returns {Validator} - Express-validator rule
   * 
   * EXAMPLE:
   * router.post("/register", [
   *   commonValidators.password("password", 8),
   *   validate,
   * ], handler);
   * 
   * VALID: "Password123"
   * INVALID: "password" (no uppercase, no number)
   * INVALID: "PASS123" (no lowercase)
   * INVALID: "Pass" (too short)
   */
  password: (field = "password", minLength = 8) =>
    body(field)
      .isLength({ min: minLength })
      .withMessage(`Password must be at least ${minLength} characters`)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number"),
};

