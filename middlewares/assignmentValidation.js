export const validateAssignmentData = (req, res, next) => {
  const body = req.body;

  if (!body.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (body.title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (!body.description) {
    return res.status(400).json({ message: "Description is required" });
  }

  if (body.description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not be over 150 characters" });
  }
  if (!body.categories) {
    return res.status(400).json({
      message: "Categories is required",
    });
  }

  if (!Array.isArray(body.categories) || body.categories.length < 1) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }
};
