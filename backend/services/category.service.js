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

function retrieveCategory(id) {
  return new Promise((resolve, reject) => {
    categoryModel.findOne({'_id': id})
      .then(categoryRetrieved => {
        resolve(categoryRetrieved)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function deleteCategory(id) {
  return new Promise((resolve, reject) => {
    categoryModel.findByIdAndRemove(id)
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
  deleteCategory,
  retrieveCategory
};