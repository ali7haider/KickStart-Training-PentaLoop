import express from "express";
import morgan from "morgan";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import logger from "./utils/logger.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import requestId from "./middleware/requestId.js";

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestId);
app.use((req, res, next) => {
  req.logger = logger.child({ requestId: req.id });
  next();
});

app.use(
  morgan("combined", {
    stream: logger.stream,
  })
);

router.use("/scholarship", scholarshipRoutes);
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("<h2>It's Working!</h2>");
});

app.use((req, res, next) => {
  req.logger?.warn("Route not found", { url: req.originalUrl });
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
});


app.use((err, req, res, next) => {
  req.logger?.error("Unhandled error", { message: err.message, stack: err.stack });
  res
    .status(err.status || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
      error: err.message || getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
});


app.listen(PORT, () => {
  logger.info(`API is listening on port ${PORT}`);
});
