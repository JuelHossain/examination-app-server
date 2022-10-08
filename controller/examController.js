const Exam = require("../models/examModel");

const createExam = async (req, res) => {
  try {
    const { body } = req;
    const newExam = new Exam(body);
    const result = await newExam.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send("there was something wrong");
  }
};

const updateExam = async (req, res) => {
  try {
    const { params: { id } = {}, body } = req;
    const data = await Exam.findByIdAndUpdate(id, body, { new: true });

    res.send(data);
  } catch {
    res.send("there was something wrong");
  }
};
const getExam = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Exam.findById(id);
    res.send(data);
  } catch (err) {
    res.send("there was something wrong");
  }
};
const deleteExam = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Exam.findByIdAndDelete(id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("there was something wrong");
  }
};
const getExams = async (req, res) => {
  try {
    const { email } = req.query;
    const data = await Exam.find(
      email === "undefined" ? {} : { "createdBy.email": email }
    );
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("there was something wrong");
  }
};

module.exports = { createExam, updateExam, getExams, getExam, deleteExam };
