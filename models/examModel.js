const mongoose = require("mongoose");

const examScheme = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: {
        A: {
          type: String,
          required: true,
        },
        B: {
          type: String,
          required: true,
        },
        C: {
          type: String,
          required: true,
        },
        D: {
          type: String,
          required: true,
        },
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  createdBy: {
    type: Object,
    required: true,
  },
});

const Exam = mongoose.model("Exam", examScheme);

module.exports = Exam;
