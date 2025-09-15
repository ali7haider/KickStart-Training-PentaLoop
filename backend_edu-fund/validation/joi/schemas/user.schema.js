import Joi from "joi";
import { regexPatterns } from "../../constants/patterns.js";
import { stringField, emailField } from "../utils/schemaUtils.js";

export const registerUserSchema = Joi.object({
  firstName: stringField(2, 50).required(),
  lastName: stringField(2, 50).required(),
  email: emailField.required(),
  password: Joi.string().pattern(regexPatterns.password).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().allow(null, ""),
    country: Joi.string().required(),
    postalCode: Joi.string().pattern(regexPatterns.postalCode).allow(null, ""),
  }),
  role: Joi.string().valid("user", "admin").default("user"),
  isActive: Joi.boolean().default(true),
});

export const loginUserSchema = Joi.object({
  email: emailField.required(),
  password: Joi.string().required(),
});
