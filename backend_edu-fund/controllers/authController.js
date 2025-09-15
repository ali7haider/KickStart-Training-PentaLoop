import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/jwt.js";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

  export const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, address } = req.body;

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Email and password are required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ error: "User already exists" });
    }

    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
      address
    });

    await newUser.save();

    const token = signToken({ id: newUser._id, email: newUser.email });

    res.status(StatusCodes.CREATED).json({
      user: {
        id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      },
      token
    });
  } catch (err) {
    next(err);
  }
};


export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    }

    const token = signToken({ id: user._id, email: user.email });

    res.status(StatusCodes.OK).json({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};
