/**
 * ============================================================================
 * APP.JS - EXPRESS APPLICATION CONFIGURATION
 * ============================================================================
 * 
 * This file configures the Express application with:
 * - Security middlewares (helmet, CORS, rate limiting, etc.)
 * - Request parsing (JSON, URL-encoded, cookies)
 * - Routes (API endpoints)
 * - Error handling
 * 
 * REQUEST FLOW:
 * 1. Request arrives → Security middlewares check it
 * 2. Request parsed → JSON/URL-encoded data extracted
 * 3. Request logged → Logger records the request
 * 4. Route matched → Express finds matching route
 * 5. Controller runs → Your business logic executes
 * 6. Response sent → Data sent back to client
 * 7. Error caught → If error, errorHandler formats it
 * 
 * FILE CONNECTIONS:
 * - Imports security.js → All security middlewares
 * - Imports routes → API endpoints (example.js, user.js, etc.)
 * - Imports errorHandler → Catches all errors
 * - Exported to server.js → Used to create HTTP server
 * 
 * LIBRARIES USED:
 * - express: Web framework for Node.js (handles HTTP requests/responses)
 * - cookie-parser: Parses cookies from requests (for authentication)
 */

import express from "express";
import cookieParser from "cookie-parser";
import env from "./config/env.js";
import logger from "./utils/logger.js";
import {
  helmetMiddleware,
  corsMiddleware,
  rateLimiter,
  xssMiddleware,
  hppMiddleware,
} from "./middlewares/security.js";
import requestLogger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

// Routes
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.set("trust proxy", 1);

app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(rateLimiter);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(xssMiddleware);
app.use(hppMiddleware);

if (env.NODE_ENV !== "test") {
  app.use(requestLogger);
}

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Edu ERP API",
    version: "1.0.0",
  });
});

app.use("/api/v1/students", studentRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;

