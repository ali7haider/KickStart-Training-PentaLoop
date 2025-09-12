import logger from "../utils/logger.js";

const requestLogger = (req, res, next) => {
  req.logger = logger.child({ requestId: req.id });

  req.logger.info("Incoming request", {
    method: req.method,
    url: req.originalUrl,
  });

  next();
};

export default requestLogger;
