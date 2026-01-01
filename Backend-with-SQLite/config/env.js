import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables from .env file
dotenv.config();

// Define schema for required and optional environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().regex(/^\d+$/).default("5000"),
  SQLITE_DB_PATH: z.string().min(1).default("./database.sqlite"),
  JWT_SECRET: z.string().min(1).default("change-this-secret-key-in-production-min-32-chars"),
  JWT_EXPIRE: z.string().default("7d"),
  JWT_COOKIE_EXPIRE: z.string().default("7"),
  CORS_ORIGIN: z.string().default("*"),
  RATE_LIMIT_WINDOW_MS: z.string().default("900000"),
  RATE_LIMIT_MAX_REQUESTS: z.string().default("100"),
  
});

// Validate environment variables
const validateEnv = () => {
  try {
    return envSchema.parse(process.env); // Checks types, required fields, defaults
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Environment validation failed:");
      error.errors.forEach(err => {
        console.error(`  - ${err.path.join(".")}: ${err.message}`);
      });
      process.exit(1); // Stop app if config is invalid
    }
    throw error;
  }
};

// Get validated environment variables
const env = validateEnv();

export default env;
