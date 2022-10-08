const express = require("express");
const {
  createUser,
  register,
  login,
  getUsers,
  updateUser,
  getUser,
  deleteUser,
} = require("../controller/userController");
const userRouter = express.Router();

userRouter.route("/").post(register).get(getUsers);
userRouter.route("/login").get(login);
userRouter
  .route("/alone/:id")
  .patch(updateUser)
  .get(getUser)
  .delete(deleteUser);

module.exports = userRouter;
