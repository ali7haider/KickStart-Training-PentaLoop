import { v4 as uuidv4 } from "uuid";

export default function requestId(req, res, next) {
  const id = uuidv4();

  req.id = id;

  res.setHeader("X-Request-Id", id);

  next();
}
