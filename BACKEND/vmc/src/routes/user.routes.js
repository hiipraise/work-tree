const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
} = require("../controller/user.controller");
const addusername = require("../middleware/addusername");

const userRouter = express.Router();
userRouter.route("/register").post(addusername, createUser); // middleware || controller || && (i.e both)
userRouter.route("/login").post(getUser);
userRouter.route("/userupdate").put(updateUser);

module.exports = { userRouter };
