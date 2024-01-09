const validationAssignment = (req, res, next) => {
  const validationMessages = [];

  if (req.body.title && req.body.title.length < 35) {
    validationMessages.push("Title must not be over 35 characters");
  }

  if (req.body.description && req.body.description.length < 150) {
    validationMessages.push("Description must not exceed 150 characters");
  }

  if (!req.body.categories || req.body.categories.length === 0) {
    validationMessages.push("Categories must be an array with at least 1 value");
  }

  if (validationMessages.length > 0) {
    return res.status(400).json({ messages: validationMessages });
  }

  next()

} 

export default validationAssignment