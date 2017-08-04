"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Schema
var UserSchema = new Schema({
  username: {
    type: String,
    index:true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  role: {
    type: String
  }
});

var User = mongoose.model('Users', UserSchema);

module.exports = User;