import { sendError } from "../utils/responseHandler.js";

/**
 * 404 Not Found Middleware
 * Handles requests to non-existent routes
 */
const notFound = (req, res, next) => {
  sendError(res, 404, `Route ${req.originalUrl} not found`);
};

export default notFound;

