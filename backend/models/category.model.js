"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Categories Schema
var CategoriesSchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    index: true
  }
});

var Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories;