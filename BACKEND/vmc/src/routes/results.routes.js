const express = require("express");
const { getResult, createResult } = require("../controller/result.controller");
const validatestudent = require("../middleware/validatestudent");
const validatecountry = require("../middleware/validatecountry");

const resultRouter = express.Router();
resultRouter
  .route("/result")
  .get(getResult)
  .post(validatestudent, validatecountry, createResult); // controller || middleware || && (i.e both)

module.exports = { resultRouter };
