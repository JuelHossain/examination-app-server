const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connect } = require("mongoose");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");
const userRouter = require("./routers/userRouter");
const examsRouter = require("./routers/examsRouter");

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

app.get("/", (req, res) => {
  res.send("hi, little friend. server is running no-worries");
});
// routers
app.use("/user", userRouter);
app.use("/exams", examsRouter);

// error handlers
app.use(notFoundHandler);
app.use(errorHandler);

// app listener
app.listen(port, () => {
  console.log("app listening on port", port);
});
