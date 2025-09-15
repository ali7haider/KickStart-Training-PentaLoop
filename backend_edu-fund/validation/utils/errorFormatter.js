export const formatJoiErrors = (details) => {
  return details.map((err) => ({
    message: err.message.replace(/['"]/g, ""),
    path: err.path.join("."),
  }));
};
