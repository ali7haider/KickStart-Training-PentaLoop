import express from "express";
import morgan from "morgan";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js"
import logger from "./utils/logger.js";
import { StatusCodes } from "http-status-codes";
import requestId from "./middleware/requestId.js";
import errorHandler from "./middleware/errorHandler.js"; 
import notFound from "./middleware/notFound.js";
import requestLogger from "./middleware/requestLogger.js";
import { port, nodeEnv } from "./config/environment.js";



const app = express();
const router = express.Router();

app.use(express.json());
app.use(requestId);
app.use(requestLogger);
app.use(
  morgan("combined", {
    stream: logger.stream,
  })
);

router.use("/scholarship", scholarshipRoutes);
router.use("/application", applicationRoutes);

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("<h2>It's Working!</h2>");
});
app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`API running in ${nodeEnv} mode on port ${port}`);
});
