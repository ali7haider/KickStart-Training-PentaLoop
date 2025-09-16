import express from "express";
const router=express.Router();
import * as movieController from "../controllers/movieController.js";


router.route("/custom").get(movieController.getMoviesCustom);
router.route("/library").get(movieController.getMoviesLibrary);

export default router;
