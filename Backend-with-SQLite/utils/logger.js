/**
 * ============================================================================
 * UTILS/LOGGER.JS - STRUCTURED LOGGING SYSTEM
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Provides structured logging throughout the application
 * - Writes logs to files (error.log, combined.log)
 * - Logs to console in development
 * - Different log levels (error, warn, info, debug)
 * 
 * FILE CONNECTIONS:
 * - Used by: server.js, database.js, errorHandler.js, requestLogger.js
 * - Writes to: logs/error.log, logs/combined.log
 * 
 * LOG LEVELS (from most to least severe):
 * - error: Errors that need attention
 * - warn: Warnings (non-critical issues)
 * - info: Informational messages (server started, user logged in)
 * - debug: Debug messages (detailed information)
 * 
 * LIBRARIES USED:
 * - winston: Professional logging library
 *   - Supports multiple transports (file, console, database)
 *   - Structured logging (JSON format)
 *   - Log rotation (prevents huge log files)
 * 
 * WHY LOGGING?
 * - Debug issues in production
 * - Monitor application health
 * - Track user actions
 * - Security auditing
 */

import winston from "winston"; // Logging library
import path from "path"; // Path utilities
import { fileURLToPath } from "url"; // ES module compatibility

/**
 * Get current directory (ES modules don't have __dirname by default)
 * 
 * In CommonJS: __dirname is available
 * In ES modules: Need to create it manually
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Winston Logger Configuration
 * 
 * Creates a logger instance with:
 * - Log levels (error, warn, info, debug)
 * - Log format (timestamp, JSON)
 * - Log destinations (files, console)
 */
const logger = winston.createLogger({
  /**
   * Log Level
   * 
   * - Production: "info" (only important messages)
   * - Development: "debug" (all messages, including debug)
   * 
   * Why different?
   * - Production: Less logs = smaller files, better performance
   * - Development: More logs = easier debugging
   */
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  
  /**
   * Log Format
   * 
   * Combines multiple formatters:
   * - timestamp: Adds date/time to each log
   * - errors: Includes error stack traces
   * - splat: Supports string interpolation
   * - json: Outputs logs as JSON (structured, easy to parse)
   */
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamp
    winston.format.errors({ stack: true }), // Include error stack traces
    winston.format.splat(), // String interpolation support
    winston.format.json() // Output as JSON
  ),
  
  /**
   * Default Metadata
   * 
   * Added to every log entry
   * Useful for filtering logs by service
   */
  defaultMeta: { service: "rankify-backend-sqlite" },
  
  /**
   * Log Transports (Where logs are written)
   * 
   * 1. error.log: Only error-level logs
   * 2. combined.log: All logs (error, warn, info, debug)
   */
  transports: [
    /**
     * Error Log File
     * 
     * Only writes errors (most severe)
     * Useful for monitoring critical issues
     * 
     * maxsize: 5MB per file
     * maxFiles: Keep 5 files (rotates when full)
     */
    new winston.transports.File({
      filename: path.join(__dirname, "../logs/error.log"),
      level: "error", // Only error-level logs
      maxsize: 5242880, // 5MB
      maxFiles: 5, // Keep 5 rotated files
    }),
    
    /**
     * Combined Log File
     * 
     * Writes all logs (all levels)
     * Useful for complete audit trail
     */
    new winston.transports.File({
      filename: path.join(__dirname, "../logs/combined.log"),
      maxsize: 5242880, // 5MB
      maxFiles: 5, // Keep 5 rotated files
    }),
  ],
});

/**
 * Console Logging (Development Only)
 * 
 * In development, also log to console
 * - Colorized output (easier to read)
 * - Human-readable format
 * 
 * In production, only log to files (better performance)
 */
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Color codes for different log levels
        winston.format.printf(
          ({ timestamp, level, message, ...meta }) =>
            `${timestamp} [${level}]: ${message} ${
              Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ""
            }`
        )
      ),
    })
  );
}

/**
 * USAGE EXAMPLES:
 * 
 * logger.error("Database connection failed", { error: err });
 * logger.warn("Rate limit exceeded", { ip: req.ip });
 * logger.info("Server started", { port: 5000 });
 * logger.debug("Request received", { method: req.method, url: req.url });
 */

export default logger;

