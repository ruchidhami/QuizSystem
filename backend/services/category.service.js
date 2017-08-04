"use strict";

const categoryModel = require('../models/category.model');

function createCategory(categoryParams) {
  return new Promise((resolve, reject) => {
    let category = new categoryModel(categoryParams);
    category.save()
      .then(categoryCreated => {
        resolve(categoryCreated);
      })
      .catch(err => {
        reject(err)
      })
  })
}

function listCategory() {
  return new Promise((resolve, reject) => {
    categoryModel.find()
      .then(listedCategory => {
        resolve(listedCategory)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function deleteCategory(id) {
  return new Promise((resolve, reject) => {
    categoryModel.findOneAndRemove(id)
      .then(categoryDeleted => {
        resolve(categoryDeleted)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  createCategory,
  listCategory,
  deleteCategory
};