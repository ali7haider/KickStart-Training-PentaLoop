import { verifyToken } from "./jwt.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: getReasonPhrase(StatusCodes.UNAUTHORIZED) });
    }
    const decoded = verifyToken(token);
    req.user = decoded;
    req.logger.info("Auth Verified", { userId: decoded.id });
    return next();
  } catch (err) {
    req.logger?.warn("Auth failed", { reason: err.message });
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: getReasonPhrase(StatusCodes.UNAUTHORIZED) });
  }
};

export default auth;
