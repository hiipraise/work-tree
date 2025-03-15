const express = require("express");
const { getResult, createResult } = require("../controller/result.controller");

const resultRouter = express.Router();
resultRouter
  .route("/result")
  .get(getResult) // controller || middleware || && (i.e both)
  .post(createResult);

module.exports = { resultRouter };
