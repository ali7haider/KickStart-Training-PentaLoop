import users from "../models/user.js";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/jwt.js";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "email and password required" });
    }
    const exists = users.find((u) => u.email === email);
    if (exists)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ error: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = {
      id: uuidv4(),
      email,
      password: hash,
      firstName,
      lastName,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);

    const token = signToken({ id: newUser.id, email: newUser.email });
    res.status(StatusCodes.CREATED).json({
      user: { id: newUser.id, email: newUser.email, firstName, lastName },
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(
        StatusCodes.BAD_REQUEST.json({ error: "email and password required" })
      );
    const user = users.find((u) => u.email === email);
    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
    const token = signToken({ id: user.id, email: user.email });

    res.status(StatusCodes.OK).json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    });

    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid credentials" });
  } catch (error) {
    next(error);
  }
};
