import express from "express";
const router=express.Router();
import { register, login } from "../controllers/authController.js";
import { registerUserSchema, loginUserSchema, validateRequest } from "../validation/index.js";

router.post('/register', validateRequest(registerUserSchema), register);
router.post('/login', validateRequest(loginUserSchema), login);

export default router;
