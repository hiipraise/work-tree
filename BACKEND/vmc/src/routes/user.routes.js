const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
} = require("../controller/user.controller");

const userRouter = express.Router();
userRouter.route("/register").post(createUser); // controller || middleware || && (i.e both)
userRouter.route("/login").post( getUser); 
userRouter.route("/userupdate").put(updateUser); 

module.exports = { userRouter };
