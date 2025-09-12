import { StatusCodes, getReasonPhrase } from "http-status-codes";

const notFound = (req, res, next) => {
  req.logger?.warn("Route not found", { url: req.originalUrl });

  res.status(StatusCodes.NOT_FOUND).json({
    error: getReasonPhrase(StatusCodes.NOT_FOUND),
  });
};

export default notFound;
