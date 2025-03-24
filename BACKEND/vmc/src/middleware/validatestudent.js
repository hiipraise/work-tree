const validatestudent = (req, res, next) => {
  const { user } = req.body;

  if (user === "student") {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
};

module.exports = validatestudent;