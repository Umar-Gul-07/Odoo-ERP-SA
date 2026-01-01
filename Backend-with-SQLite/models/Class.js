import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Class = sequelize.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  section: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  academicYear: {
    type: DataTypes.STRING,
    field: "academic_year",
    allowNull: true,
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
  tableName: "classes",
  timestamps: true,
});

export default Class;

