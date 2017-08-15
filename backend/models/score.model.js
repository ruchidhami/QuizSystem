"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Schema
var ScoreSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId, ref: "Categories",
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId, ref: "Users",
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

var Score = mongoose.model('Scores', ScoreSchema);

module.exports = Score;