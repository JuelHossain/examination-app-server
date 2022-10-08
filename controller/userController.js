const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// user register
const register = async (req, res) => {
  try {
    const { body } = req;
    const password = await bcrypt.hash(body.password, 10);
    const newUser = new User({ ...body, password });
    const result = await newUser.save();
    res.send(result);
  } catch {
    res.send("something went wrong");
  }
};

// user login
const login = async (req, res) => {
  try {
    const { user } = req.headers;
    const { email, password } = JSON.parse(user) || {};
    const data = await User.findOne({ email });
    if (data) {
      if (password) {
        const hashedPassword = data.password;
        const matched = await bcrypt.compare(password, hashedPassword);
        if (matched) {
          res.send(data);
        } else {
          res.send("Password doesn't Match");
        }
      } else {
        res.send("Please provide a password");
      }
    } else {
      res.send("User Not found");
    }
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};

// get users

const getUsers = async (req, res) => {
  try {
    const { admin } = req.query;
    const data = await User.find({
      admin: admin === "undefined" ? false : true,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};
const updateUser = async (req, res) => {
  try {
    const { params: { id } = {}, body } = req;
    const data = await User.findByIdAndUpdate(id, body, { new: true });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};
const getUser = async (req, res) => {
  try {
    const { params: { id } = {} } = req;
    const data = await User.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};
const deleteUser = async (req, res) => {
  try {
    const { params: { id } = {} } = req;
    const data = await User.findByIdAndDelete(id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
};

module.exports = { register, login, getUsers, updateUser, getUser, deleteUser };
