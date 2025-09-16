import express from "express";
import connectDB from "./config/db.js";

import morgan from "morgan";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import moviesRoutes from "./routes/movieRoutes.js";
import logger from "./utils/logger.js";
import { StatusCodes } from "http-status-codes";
import requestId from "./middleware/requestId.js";
import errorHandler from "./middleware/errorHandler.js"; 
import notFound from "./middleware/notFound.js";
import requestLogger from "./middleware/requestLogger.js";
import { port, nodeEnv } from "./config/environment.js";


connectDB();

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

router.use("/auth",userRoutes)
router.use("/scholarship", scholarshipRoutes);
router.use("/application", applicationRoutes);
router.use("/movies", moviesRoutes);


app.use("/api", router);

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("<h2>It's Working!</h2>");
});
app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`API running in ${nodeEnv} mode on port ${port}`);
});
