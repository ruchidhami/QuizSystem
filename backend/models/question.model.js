"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Question Schema
var QuestionSchema = new Schema({
  question: {
    type: String,
    index: true,
    required: true
  },
  incorrectAnswer: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  categoryId: {
    type: Schema.Types.ObjectId, ref: "Categories"
  }
});

var Question = mongoose.model('Questions', QuestionSchema);

module.exports = Question;