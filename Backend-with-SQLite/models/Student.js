import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    allowNull: false,
    unique: true,
    references: {
      model: "users",
      key: "id",
    },
  },
  firstName: {
    type: DataTypes.STRING,
    field: "first_name",
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name",
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    field: "date_of_birth",
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM("male", "female", "other"),
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classId: {
    type: DataTypes.INTEGER,
    field: "class_id",
    allowNull: true,
    references: {
      model: "classes",
      key: "id",
    },
  },
  enrollmentDate: {
    type: DataTypes.DATEONLY,
    field: "enrollment_date",
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive", "graduated"),
    defaultValue: "active",
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at",
  },
}, {
  tableName: "students",
  timestamps: true,
});

export default Student;
