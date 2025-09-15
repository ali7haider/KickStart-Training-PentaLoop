import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/environment.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import logger from "../utils/logger.js";

export const signToken = (payload) => {
    return jwt.sign(payload,JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})
}

export const verifyToken = (token)=>{
try {
    return jwt.verify(token,JWT_SECRET);
} catch (error) {
    logger.error("Invalid Token", { error: error.message });
    const err = new Error("Unauthorized: Invalid or expired token");
    err.status = StatusCodes.UNAUTHORIZED;
    throw err;

}
}