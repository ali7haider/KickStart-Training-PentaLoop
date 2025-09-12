import express from "express";
import morgan from "morgan";
import scholarshipRoutes from "./routes/scholarshipRoutes.js"; 

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

router.use("/scholarship", scholarshipRoutes);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
