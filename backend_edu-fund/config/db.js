import mongoose from "mongoose";
import logger from "../utils/logger.js";
import { mongoUri, nodeEnv } from "./environment.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri);

    logger.info(
      `MongoDB Connected: ${conn.connection.host} in ${nodeEnv} mode`
    );
  } catch (error) {
    logger.error("MongoDB connection error", { error: error.message });
    process.exit(1);
  }
};
export default connectDB;
