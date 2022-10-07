const express = require("express");
const { createUser, register, login } = require("../controller/userController");
const userRouter = express.Router();

userRouter.route("/").post(register).get(login);

module.exports = userRouter;
