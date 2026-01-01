import { Sequelize } from "sequelize";
import env from "./env.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.isAbsolute(env.SQLITE_DB_PATH)
  ? env.SQLITE_DB_PATH
  : path.join(__dirname, "..", env.SQLITE_DB_PATH);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
});

const connectDB = async () => {
  try {
    // Import models to register them
    await import("../models/index.js");
    
    await sequelize.authenticate();
    await sequelize.sync({ alter: false });
    
    return sequelize;
  } catch (error) {
    throw error;
  }
};

export { sequelize };
export default connectDB;
