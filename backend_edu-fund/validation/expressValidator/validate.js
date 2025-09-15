import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errors.array().map(err => ({
        path: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};
export default validate;
