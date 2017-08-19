"use strict";

const scoreModel = require('../models/score.model');

function updateScore(params) {
  console.log(params,"gggggg")
  return new Promise((resolve, reject) => {
    scoreModel.findOne({userId: params.userId, categoryId: params.categoryId})
      .then(score => {
        if (score) {
          scoreModel.findByIdAndUpdate(score._id, {$set: {value: params.value}}, function (err, scoreUpdate) {
            resolve(scoreUpdate)
          })
        }
        else {
          let score = new scoreModel(params);
          score.save()
            .then(scoreCreated => {
              resolve(scoreCreated)
            })
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

function fetchScore(userId, categoryId) {
  return new Promise((resolve, reject) => {
    scoreModel.findOne({userId: userId, categoryId: categoryId})
      .then(fetchedScore => {
        resolve(fetchedScore || {})
      })
      .catch(err => {
        reject(err)
      })
  })
}

function fetchCategoryUser(categoryId) {
  return new Promise((resolve, reject) => {
    scoreModel.find({categoryId: categoryId})
      .then(fetchedCategoryUser => {
        resolve(fetchedCategoryUser || {})
      })
      .catch(err => {
        reject(err)
      })
  })
}

function listScore() {
  return new Promise((resolve, reject) => {
    scoreModel.find()
      .then(fetchedScore => {
        resolve(fetchedScore)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  updateScore,
  fetchScore,
  listScore,
  fetchCategoryUser
};