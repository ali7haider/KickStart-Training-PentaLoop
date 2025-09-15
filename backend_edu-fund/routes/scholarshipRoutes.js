import express from "express";
const router = express.Router();
import * as scholarshipController from "../controllers/scholarshipController.js";
import auth from "../middleware/auth.js";

router
  .route("/")
  .get(scholarshipController.getAllScholarship)
  .post(auth,scholarshipController.createScholarship);

router
  .route("/:id")
  .get(scholarshipController.getScholarshipById)
  .put(scholarshipController.updateScholarship)
  .delete(scholarshipController.deleteScholarship);

export default router;
