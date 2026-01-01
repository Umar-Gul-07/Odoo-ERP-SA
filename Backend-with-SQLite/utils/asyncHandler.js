/**
 * ============================================================================
 * UTILS/ASYNCHANDLER.JS - ASYNC ERROR WRAPPER
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Wraps async route handlers to automatically catch errors
 * - Eliminates need for try-catch blocks in every route
 * - Passes errors to Express error handler
 * 
 * FILE CONNECTIONS:
 * - Used by: All route handlers (wraps async functions)
 * - Works with: errorHandler.js (errors are passed to it)
 * 
 * PROBLEM IT SOLVES:
 * - Without this: async errors crash the server
 * - With this: async errors are caught and handled gracefully
 * 
 * EXAMPLE:
 * 
 * WITHOUT asyncHandler:
 * router.get("/", async (req, res) => {
 *   try {
 *     const data = await someAsyncFunction();
 *     res.json(data);
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 * 
 * WITH asyncHandler:
 * router.get("/", asyncHandler(async (req, res) => {
 *   const data = await someAsyncFunction(); // If this throws, asyncHandler catches it
 *   res.json(data);
 * }));
 * 
 * HOW IT WORKS:
 * 1. Wraps async function in Promise.resolve()
 * 2. If function throws error → .catch() catches it
 * 3. Calls next(error) → passes error to Express error handler
 */

/**
 * Async Handler Wrapper Function
 * 
 * @param {Function} fn - Async route handler function
 * @returns {Function} - Wrapped function that catches errors
 * 
 * USAGE:
 * const handler = asyncHandler(async (req, res) => {
 *   // Your async code here
 * });
 */
const asyncHandler = (fn) => (req, res, next) => {
  /**
   * Promise.resolve() converts the function to a Promise
   * .catch(next) catches any errors and passes them to Express error handler
   * 
   * This means:
   * - If function throws error → caught by .catch()
   * - Error passed to next() → Express error handler runs
   * - Server doesn't crash!
   */
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;

