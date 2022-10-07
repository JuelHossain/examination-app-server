const express = require("express");
const {
  createExam,
  getExams,
  getExam,
  updateExam,
  deleteExam,
} = require("../controller/examController");

const examsRouter = express.Router();

examsRouter.route("/").post(createExam).get(getExams);
examsRouter.route("/:id").patch(updateExam).get(getExam).delete(deleteExam);

module.exports = examsRouter;
