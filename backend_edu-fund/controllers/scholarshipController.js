import { v4 as uuidv4 } from "uuid";
import scholarships from "../models/scholarship.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const getAllScholarship = (req, res) => {
  if (!scholarships.length) {
    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: getReasonPhrase(StatusCodes.NO_CONTENT) });
  }
  res.status(StatusCodes.OK).json(scholarships);
};

export const createScholarship = (req, res) => {
  const { title, description, amount, deadline, eligibility } = req.body;
  if (!title || !description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: getReasonPhrase(StatusCodes.BAD_REQUEST) });
  }
  const newScholarship = {
    id: uuidv4(),
    title,
    description,
    amount,
    deadline,
    eligibility,
  };
  scholarships.push(newScholarship);
  res.status(StatusCodes.CREATED).json(newScholarship);
};

export const updateScholarship = (req, res) => {
  const { id } = req.params;
  const index = scholarships.findIndex((s) => String(s.id) === id);

  if (index === -1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
  scholarships[index] = { ...scholarships[index], ...req.body };

  res.status(StatusCodes.OK).json(scholarships[index]);
};

export const deleteScholarship = (req, res) => {
  const { id } = req.params;
  const index = scholarships.findIndex((s) => String(s.id) === id);
  if (index === -1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }

  const deleted = scholarships.splice(index, 1);
  res.status(StatusCodes.OK).json({
    message: "Scholarship deleted",
    deleted,
  });
};

export const getScholarshipById = (req, res) => {
  const { id } = req.params;
  const index = scholarships.findIndex((s) => String(s.id) === id);
  if (index === -1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
  res.status(StatusCodes.OK).json(scholarships[index]);
};
