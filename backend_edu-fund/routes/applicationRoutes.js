import express from "express";
const router=express.Router();
import * as applicationController from "../controllers/applicationController.js";


router.
route("/")
.get(applicationController.getAllApplication)


export default router;
