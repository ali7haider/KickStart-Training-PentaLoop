import { body } from "express-validator";

export const registerValidation = [
  body("firstName")
    .isString().withMessage("First name must be a string")
    .isLength({ min: 2 }).withMessage("First name must be at least 2 chars"),

  body("lastName")
    .isString().withMessage("Last name must be a string")
    .isLength({ min: 2 }).withMessage("Last name must be at least 2 chars"),

  body("email")
    .isEmail().withMessage("Must be a valid email"),

  body("password")
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/)
    .withMessage("Password must have at least 1 uppercase, 1 digit, and be 6+ chars"),

  body("address.street").notEmpty().withMessage("Street is required"),
  body("address.city").notEmpty().withMessage("City is required"),
  body("address.country").notEmpty().withMessage("Country is required"),

  body("role").optional().isIn(["user", "admin"]),
  body("isActive").optional().isBoolean(),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];
