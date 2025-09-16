import { v4 as uuidv4 } from "uuid";
import scholarships from "../models/scholarship.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const getAllScholarship = (req, res) => {
  if (!scholarships.length) {
    req.logger.warn("No scholarships found");
    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: getReasonPhrase(StatusCodes.NO_CONTENT) });
  }

  req.logger.info("Fetched scholarships", { count: scholarships.length });
  res.status(StatusCodes.OK).json(scholarships);
};

export const createScholarship = (req, res) => {
  const { title, description, amount, deadline, eligibility } = req.body;

  if (!title || !description) {
    req.logger.error("Failed to create scholarship: Missing fields", { body: req.body });
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: getReasonPhrase(StatusCodes.BAD_REQUEST) });
  }
  const userId = req.user?.id;

  const newScholarship = {
    id: uuidv4(),
    title,
    description,
    amount,
    deadline,
    eligibility,
    createdBy: userId || "admin",
    createdByEmail: req.user?.email || "admin@example.com",
    createdAt: new Date().toISOString(),
  };

  scholarships.push(newScholarship);
  req.logger.info("Scholarship created", { id: newScholarship.id, title });
  res.status(StatusCodes.CREATED).json(newScholarship);
};

export const updateScholarship = (req, res) => {
  const { id } = req.params;
  const index = scholarships.findIndex((s) => String(s.id) === id);

  if (index === -1) {
    req.logger.warn(`Scholarship with id ${id} not found`);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }

  scholarships[index] = { ...scholarships[index], ...req.body };
  req.logger.info(`Scholarship updated`, { id });
  res.status(StatusCodes.OK).json(scholarships[index]);
};

export const deleteScholarship = (req, res) => {
  const { id } = req.params;
  const index = scholarships.findIndex((s) => String(s.id) === id);

  if (index === -1) {
    req.logger.warn(`Scholarship with id ${id} not found for deletion`);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }

  const deleted = scholarships.splice(index, 1);
  req.logger.info(`Scholarship deleted`, { id });
  res.status(StatusCodes.OK).json({
    message: "Scholarship deleted",
    deleted,
  });
};

export const getScholarshipById = (req, res) => {
  const { id } = req.params;
  const scholarship = scholarships.find((s) => String(s.id) === id);

  if (!scholarship) {
    req.logger.warn(`Scholarship with id ${id} not found`);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }

  req.logger.info(`Fetched scholarship by id`, { id });
  res.status(StatusCodes.OK).json(scholarship);
};
