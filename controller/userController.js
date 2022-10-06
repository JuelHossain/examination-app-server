const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

// user register
const register = async (req, res) => {
  try {
    const { body } = req;
    const password = await bcrypt.hash(body.password, 10);
    const newUser = new Users({ ...body, password });
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
    const data = await Users.findOne({ email });
    if (password) {
      const hashedPassword = data.password;
      const matched = await bcrypt.compare(password, hashedPassword);
      res.send(matched);
    } else {
      res.send("Please provide a password");
    }
  } catch (err) {
    res.send("something went wrong");
  }
};

module.exports = { register, login };
