import { StatusCodes, getReasonPhrase } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  req.logger?.error("Unhandled error", {
    message: err.message,
    stack: err.stack,
  });

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: err.message || getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  });
};

export default errorHandler;
