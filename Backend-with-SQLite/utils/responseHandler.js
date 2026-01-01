/**
 * ============================================================================
 * UTILS/RESPONSEHANDLER.JS - STANDARDIZED API RESPONSES
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Provides consistent response format across the entire API
 * - Makes all responses follow the same structure
 * - Easier for frontend to handle responses
 * 
 * FILE CONNECTIONS:
 * - Used by: All route handlers (controllers)
 * - Used by: Error handler (sends error responses)
 * 
 * WHY STANDARDIZED RESPONSES?
 * - Frontend knows what to expect (consistent structure)
 * - Easier to debug (same format everywhere)
 * - Better error handling (errors always in same format)
 * 
 * RESPONSE FORMATS:
 * 
 * Success:
 * {
 *   "success": true,
 *   "message": "Operation successful",
 *   "data": { ... }
 * }
 * 
 * Error:
 * {
 *   "success": false,
 *   "message": "Error message",
 *   "errors": [ ... ]
 * }
 * 
 * Paginated:
 * {
 *   "success": true,
 *   "message": "Success",
 *   "data": [ ... ],
 *   "pagination": {
 *     "page": 1,
 *     "limit": 10,
 *     "total": 100,
 *     "pages": 10
 *   }
 * }
 */

/**
 * Send Success Response
 * 
 * @param {Object} res - Express response object
 * @param {Number} statusCode - HTTP status code (200, 201, etc.)
 * @param {String} message - Success message
 * @param {*} data - Response data (optional)
 * 
 * EXAMPLE:
 * sendSuccess(res, 200, "User created", { id: 1, name: "John" })
 * 
 * RESPONSE:
 * {
 *   "success": true,
 *   "message": "User created",
 *   "data": { "id": 1, "name": "John" }
 * }
 */
export const sendSuccess = (res, statusCode = 200, message = "Success", data = null) => {
  const response = {
    success: true,
    message,
  };

  // Only add data if it's provided
  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

/**
 * Send Error Response
 * 
 * @param {Object} res - Express response object
 * @param {Number} statusCode - HTTP status code (400, 401, 404, 500, etc.)
 * @param {String} message - Error message
 * @param {Array} errors - Detailed error array (optional)
 * 
 * EXAMPLE:
 * sendError(res, 404, "User not found")
 * sendError(res, 400, "Validation failed", [{ field: "email", message: "Invalid email" }])
 * 
 * RESPONSE:
 * {
 *   "success": false,
 *   "message": "User not found"
 * }
 */
export const sendError = (res, statusCode = 500, message = "Internal Server Error", errors = null) => {
  const response = {
    success: false,
    message,
  };

  // Only add errors array if provided (for validation errors)
  if (errors !== null) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

/**
 * Send Paginated Response
 * 
 * Used for endpoints that return lists with pagination
 * 
 * @param {Object} res - Express response object
 * @param {Number} statusCode - HTTP status code
 * @param {String} message - Success message
 * @param {Object} data - Data object (should have .results array)
 * @param {Object} pagination - Pagination metadata
 * 
 * EXAMPLE:
 * sendPaginated(res, 200, "Users retrieved", 
 *   { results: [{ id: 1 }, { id: 2 }] },
 *   { page: 1, limit: 10, total: 100, pages: 10 }
 * )
 * 
 * RESPONSE:
 * {
 *   "success": true,
 *   "message": "Users retrieved",
 *   "data": [{ "id": 1 }, { "id": 2 }],
 *   "pagination": {
 *     "page": 1,
 *     "limit": 10,
 *     "total": 100,
 *     "pages": 10
 *   }
 * }
 */
export const sendPaginated = (res, statusCode = 200, message = "Success", data = {}, pagination = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data: data.results || data, // Support both { results: [...] } and [...]
    pagination: {
      page: pagination.page || 1,
      limit: pagination.limit || 10,
      total: pagination.total || 0,
      pages: pagination.pages || 1,
      ...pagination, // Allow additional pagination fields
    },
  });
};

