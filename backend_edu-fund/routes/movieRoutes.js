import express from "express";
const router=express.Router();
import * as movieController from "../controllers/movieController.js";

import { asyncHandler } from "../middleware/asyncHandler.js";

router.route("/custom").get(asyncHandler(movieController.getMoviesCustom));
router.route("/library").get(asyncHandler(movieController.getMoviesLibrary));

export default router;
