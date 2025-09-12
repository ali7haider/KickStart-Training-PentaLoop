import fs from "fs";
import path from "path";
import winston from "winston";

const logDir = "logs";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack, requestId, ...meta }) => {
  return `${timestamp} [${level}]${requestId ? ` [reqId:${requestId}]` : ""} : ${
    stack || message
  } ${Object.keys(meta).length ? JSON.stringify(meta) : ""}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
    }),
  ],
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};


export default logger;
