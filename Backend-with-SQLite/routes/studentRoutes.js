/**
 * ============================================================================
 * ROUTES/STUDENTROUTES.JS - STUDENT ROUTES
 * ============================================================================
 * 
 * WHAT THIS FILE DOES:
 * - Defines all student API endpoints
 * - Validates request data
 * - Connects routes to controller functions
 */

import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { validate, commonValidators } from "../utils/validators.js";
import { body, param, query } from "express-validator";
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

/**
 * @route   GET /api/v1/students
 * @desc    Get all students with pagination and filtering
 * @access  Public (add auth middleware if needed)
 */
router.get(
  "/",
  [
    commonValidators.pagination,
    query("class_id").optional().isInt({ min: 1 }).withMessage("class_id must be a positive integer"),
    query("status").optional().isIn(["active", "inactive", "graduated"]).withMessage("Invalid status"),
    query("search").optional().trim().isLength({ min: 1 }).withMessage("Search term cannot be empty"),
    validate,
  ],
  asyncHandler(getStudents)
);

/**
 * @route   GET /api/v1/students/:id
 * @desc    Get single student by ID
 * @access  Public (add auth middleware if needed)
 */
router.get(
  "/:id",
  [commonValidators.intId("id"), validate],
  asyncHandler(getStudentById)
);

/**
 * @route   POST /api/v1/students
 * @desc    Create new student
 * @access  Public (add auth middleware if needed)
 */
router.post(
  "/",
  [
    // User fields
    body("email").isEmail().normalizeEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    
    // Student fields
    body("first_name").trim().notEmpty().withMessage("First name is required"),
    body("last_name").trim().notEmpty().withMessage("Last name is required"),
    body("date_of_birth").optional().isISO8601().withMessage("Invalid date format (use ISO 8601)"),
    body("gender").optional().isIn(["male", "female", "other"]).withMessage("Invalid gender"),
    body("address").optional().trim(),
    body("phone").optional().trim(),
    body("class_id").optional().isInt({ min: 1 }).withMessage("class_id must be a positive integer"),
    body("enrollment_date").optional().isISO8601().withMessage("Invalid date format (use ISO 8601)"),
    body("status").optional().isIn(["active", "inactive", "graduated"]).withMessage("Invalid status"),
    validate,
  ],
  asyncHandler(createStudent)
);

/**
 * @route   PUT /api/v1/students/:id
 * @desc    Update student
 * @access  Public (add auth middleware if needed)
 */
router.put(
  "/:id",
  [
    commonValidators.intId("id"),
    body("first_name").optional().trim().notEmpty().withMessage("First name cannot be empty"),
    body("last_name").optional().trim().notEmpty().withMessage("Last name cannot be empty"),
    body("date_of_birth").optional().isISO8601().withMessage("Invalid date format (use ISO 8601)"),
    body("gender").optional().isIn(["male", "female", "other"]).withMessage("Invalid gender"),
    body("address").optional().trim(),
    body("phone").optional().trim(),
    body("class_id")
      .optional({ nullable: true, checkFalsy: true })
      .custom((value) => {
        if (value === null || value === undefined || value === "") {
          return true; // Allow null/undefined/empty
        }
        const num = parseInt(value, 10);
        return !isNaN(num) && num > 0;
      })
      .withMessage("class_id must be a positive integer or null"),
    body("enrollment_date").optional().isISO8601().withMessage("Invalid date format (use ISO 8601)"),
    body("status").optional().isIn(["active", "inactive", "graduated"]).withMessage("Invalid status"),
    validate,
  ],
  asyncHandler(updateStudent)
);

/**
 * @route   DELETE /api/v1/students/:id
 * @desc    Delete student
 * @access  Public (add auth middleware if needed)
 */
router.delete(
  "/:id",
  [commonValidators.intId("id"), validate],
  asyncHandler(deleteStudent)
);

export default router;

