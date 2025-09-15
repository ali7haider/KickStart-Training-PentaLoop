import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5000;
export const nodeEnv = process.env.NODE_ENV || "development";
export const frontendUrl =
  process.env.FRONTEND_URL || "http://localhost:5177";
export const JWT_SECRET = process.env.JSON_WEBTOKEN_SECRET || "your_jwt_secret_key";
export const JWT_EXPIRES_IN = process.env.JSON_WEBTOKEN_EXPIRES_IN || "1h";
export const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/eduFundDB";
