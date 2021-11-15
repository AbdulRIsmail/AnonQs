const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  userId: String,
  questionId: String,
  answer: String,
  date: { type: Date, default: Date.now }
});

const Answer = mongoose.model('answers', AnswerSchema);

module.exports = Answer;
