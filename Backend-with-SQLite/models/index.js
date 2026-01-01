import User from "./User.js";
import Class from "./Class.js";
import Student from "./Student.js";

// Setup associations after all models are defined
Student.belongsTo(User, { foreignKey: "userId", as: "user" });
Student.belongsTo(Class, { foreignKey: "classId", as: "class" });

export { User, Class, Student };
