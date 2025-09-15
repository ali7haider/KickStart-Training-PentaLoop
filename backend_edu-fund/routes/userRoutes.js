import express from "express";
const router=express.Router();
import { register, login } from "../controllers/authController.js";
// Joi Imports
import { registerUserSchema, loginUserSchema, validateRequest } from "../validation/joi/index.js";
// Express Validator Imports
import { registerValidation, loginValidation,validate } from "../validation/expressValidator/index.js";

// Joi Implementation
// router.post('/register', validateRequest(registerUserSchema), register);
// router.post('/login', validateRequest(loginUserSchema), login);

// Express Validator Implementation
router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);

export default router;
