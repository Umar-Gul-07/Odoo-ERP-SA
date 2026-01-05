import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import { sequelize } from "../config/database";
import { toDefaultValue } from "sequelize/lib/utils";

const Teacher= sequelize.define("Teacher", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    teacherId: {
        type: DataTypes.INTEGER,
        field: "teacher_id",
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
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM("male", "female", "other"),
            allowNull: false,
        },
        address: 
        {
            type: DataTypes.STRING,
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
              field: "enrollment_data",
              allowNull: true,
            },
            status: {
                type: DataTypes.ENUM("active","inactive"),
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
 },

{
    tableName: "teachers",
    timestamps: true,
}
);

export default Teacher;