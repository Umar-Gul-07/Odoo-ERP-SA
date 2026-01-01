import { sendSuccess, sendError, sendPaginated } from "../utils/responseHandler.js";
import logger from "../utils/logger.js";
import { Student, User, Class } from "../models/index.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "../config/database.js";

export const getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, class_id, status, search } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build where conditions
    const where = {};
    if (class_id) where.classId = parseInt(class_id);
    if (status) where.status = status;

    // Search condition
    let searchCondition = {};
    if (search) {
      searchCondition = {
        [Op.or]: [
          { firstName: { [Op.like]: `%${search}%` } },
          { lastName: { [Op.like]: `%${search}%` } },
          { "$user.email$": { [Op.like]: `%${search}%` } },
        ],
      };
    }

    // Get students with pagination
    const result = await Student.findAndCountAll({
      where: { ...where, ...searchCondition },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["email"],
        },
        {
          model: Class,
          as: "class",
          attributes: ["name", "grade", "section"],
          required: false,
        },
      ],
      limit: limitNum,
      offset: (pageNum - 1) * limitNum,
      order: [["createdAt", "DESC"]],
    });

    // Format response
    const students = result.rows.map((student) => ({
      id: student.id,
      user_id: student.userId,
      first_name: student.firstName,
      last_name: student.lastName,
      date_of_birth: student.dateOfBirth,
      gender: student.gender,
      address: student.address,
      phone: student.phone,
      class_id: student.classId,
      enrollment_date: student.enrollmentDate,
      status: student.status,
      created_at: student.createdAt,
      updated_at: student.updatedAt,
      email: student.user?.email,
      class_name: student.class?.name,
      class_grade: student.class?.grade,
      class_section: student.class?.section,
    }));

    const pages = Math.ceil(result.count / limitNum);

    sendPaginated(res, 200, "Students retrieved successfully", students, {
      page: pageNum,
      limit: limitNum,
      total: result.count,
      pages,
    });
  } catch (error) {
    logger.error(`Get students error: ${error.message}`);
    sendError(res, 500, "Failed to retrieve students", null);
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);

    if (isNaN(studentId)) {
      return sendError(res, 400, "Invalid student ID");
    }

    const student = await Student.findByPk(studentId, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["email"],
        },
        {
          model: Class,
          as: "class",
          attributes: ["name", "grade", "section"],
          required: false,
        },
      ],
    });

    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    const studentData = {
      id: student.id,
      user_id: student.userId,
      first_name: student.firstName,
      last_name: student.lastName,
      date_of_birth: student.dateOfBirth,
      gender: student.gender,
      address: student.address,
      phone: student.phone,
      class_id: student.classId,
      enrollment_date: student.enrollmentDate,
      status: student.status,
      created_at: student.createdAt,
      updated_at: student.updatedAt,
      email: student.user?.email,
      class_name: student.class?.name,
      class_grade: student.class?.grade,
      class_section: student.class?.section,
    };

    sendSuccess(res, 200, "Student retrieved successfully", studentData);
  } catch (error) {
    logger.error(`Get student by ID error: ${error.message}`);
    sendError(res, 500, "Failed to retrieve student", null);
  }
};

export const createStudent = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const {
      email,
      password,
      first_name,
      last_name,
      date_of_birth,
      gender,
      address,
      phone,
      class_id,
      enrollment_date,
      status = "active",
    } = req.body;

    // Check if email exists
    const existingUser = await User.findOne({ where: { email }, transaction });
    if (existingUser) {
      await transaction.rollback();
      return sendError(res, 400, "User with this email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create(
      {
        email,
        password: hashedPassword,
        role: "student",
      },
      { transaction }
    );

    // Create student
    const student = await Student.create(
      {
        userId: user.id,
        firstName: first_name,
        lastName: last_name,
        dateOfBirth: date_of_birth || null,
        gender: gender || null,
        address: address || null,
        phone: phone || null,
        classId: class_id ? parseInt(class_id) : null,
        enrollmentDate: enrollment_date || null,
        status,
      },
      { transaction }
    );

    await transaction.commit();

    // Fetch created student with relations
    const createdStudent = await Student.findByPk(student.id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["email"],
        },
        {
          model: Class,
          as: "class",
          attributes: ["name", "grade", "section"],
          required: false,
        },
      ],
    });

    const studentData = {
      id: createdStudent.id,
      user_id: createdStudent.userId,
      first_name: createdStudent.firstName,
      last_name: createdStudent.lastName,
      date_of_birth: createdStudent.dateOfBirth,
      gender: createdStudent.gender,
      address: createdStudent.address,
      phone: createdStudent.phone,
      class_id: createdStudent.classId,
      enrollment_date: createdStudent.enrollmentDate,
      status: createdStudent.status,
      created_at: createdStudent.createdAt,
      updated_at: createdStudent.updatedAt,
      email: createdStudent.user?.email,
      class_name: createdStudent.class?.name,
      class_grade: createdStudent.class?.grade,
      class_section: createdStudent.class?.section,
    };

    sendSuccess(res, 201, "Student created successfully", studentData);
  } catch (error) {
    await transaction.rollback();
    logger.error(`Create student error: ${error.message}`);

    if (error.name === "SequelizeForeignKeyConstraintError") {
      return sendError(res, 400, "Invalid class_id provided");
    }

    if (error.name === "SequelizeUniqueConstraintError") {
      return sendError(res, 400, "Student with this user_id already exists");
    }

    sendError(res, 500, "Failed to create student", null);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);

    if (isNaN(studentId)) {
      return sendError(res, 400, "Invalid student ID");
    }

    const student = await Student.findByPk(studentId);
    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    // Prepare update data
    const updateData = {};
    if (req.body.first_name !== undefined) updateData.firstName = req.body.first_name;
    if (req.body.last_name !== undefined) updateData.lastName = req.body.last_name;
    if (req.body.date_of_birth !== undefined) updateData.dateOfBirth = req.body.date_of_birth || null;
    if (req.body.gender !== undefined) updateData.gender = req.body.gender || null;
    if (req.body.address !== undefined) updateData.address = req.body.address || null;
    if (req.body.phone !== undefined) updateData.phone = req.body.phone || null;
    if (req.body.class_id !== undefined) updateData.classId = req.body.class_id ? parseInt(req.body.class_id) : null;
    if (req.body.enrollment_date !== undefined) updateData.enrollmentDate = req.body.enrollment_date || null;
    if (req.body.status !== undefined) updateData.status = req.body.status;

    await student.update(updateData);

    // Fetch updated student
    const updatedStudent = await Student.findByPk(studentId, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["email"],
        },
        {
          model: Class,
          as: "class",
          attributes: ["name", "grade", "section"],
          required: false,
        },
      ],
    });

    const studentData = {
      id: updatedStudent.id,
      user_id: updatedStudent.userId,
      first_name: updatedStudent.firstName,
      last_name: updatedStudent.lastName,
      date_of_birth: updatedStudent.dateOfBirth,
      gender: updatedStudent.gender,
      address: updatedStudent.address,
      phone: updatedStudent.phone,
      class_id: updatedStudent.classId,
      enrollment_date: updatedStudent.enrollmentDate,
      status: updatedStudent.status,
      created_at: updatedStudent.createdAt,
      updated_at: updatedStudent.updatedAt,
      email: updatedStudent.user?.email,
      class_name: updatedStudent.class?.name,
      class_grade: updatedStudent.class?.grade,
      class_section: updatedStudent.class?.section,
    };

    sendSuccess(res, 200, "Student updated successfully", studentData);
  } catch (error) {
    logger.error(`Update student error: ${error.message}`);

    if (error.name === "SequelizeForeignKeyConstraintError") {
      return sendError(res, 400, "Invalid class_id provided");
    }

    sendError(res, 500, "Failed to update student", null);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentId = parseInt(id);

    if (isNaN(studentId)) {
      return sendError(res, 400, "Invalid student ID");
    }

    const student = await Student.findByPk(studentId);
    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    // Delete student (cascades to user due to foreign key)
    await student.destroy();

    sendSuccess(res, 200, "Student deleted successfully", null);
  } catch (error) {
    logger.error(`Delete student error: ${error.message}`);
    sendError(res, 500, "Failed to delete student", null);
  }
};
