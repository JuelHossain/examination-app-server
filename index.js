const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connect } = require("mongoose");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// connecting mongoose
(async () => {
  try {
    await connect(process.env.URI);
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
})();

// error handlers
app.use(notFoundHandler);
app.use(errorHandler);

// app listener
app.listen(port, () => {
  console.log("app listening on port", port);
});