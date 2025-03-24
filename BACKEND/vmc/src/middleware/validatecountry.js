const validatecountry = (req, res, next) => {
  const { country } = req.body;

  if (country === "Nigeria") {
    next();
  } else {
    return res
      .status(400)
      .json({ message: "Not available to students outside Nigeria" });
  }
};

module.exports = validatecountry;