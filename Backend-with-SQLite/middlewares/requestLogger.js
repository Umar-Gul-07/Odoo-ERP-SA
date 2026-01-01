import logger from "../utils/logger.js";

/**
 * Request Logger Middleware
 * Logs all incoming requests with relevant information
 */
const requestLogger = (req, res, next) => {
  const start = Date.now();

  // Log request
  logger.info({
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });

  // Log response when finished
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info({
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
    });
  });

  next();
};

export default requestLogger;

