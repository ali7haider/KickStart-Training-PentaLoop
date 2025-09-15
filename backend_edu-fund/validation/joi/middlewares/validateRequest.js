import { formatJoiErrors } from "../utils/errorFormatter.js";

const validateRequest = (schema, property = "body") => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], {
      abortEarly: false, 
      allowUnknown: false, 
    });

    if (error) {
      return res.status(400).json({
        errors: formatJoiErrors(error.details),
      });
    }

    next();
  };
};

export default validateRequest;
