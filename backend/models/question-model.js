const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  userID: String,
  question: String,
  date: { type: Date, default: Date.now }
});

const Question = mongoose.model('questions', QuestionSchema);

module.exports = Question;
