import Joi from "joi";

export const idField = Joi.string().pattern(/^[0-9a-fA-F]{24}$/);

export const stringField = (min, max) =>
  Joi.string().trim().min(min).max(max);

export const emailField = Joi.string().email();
