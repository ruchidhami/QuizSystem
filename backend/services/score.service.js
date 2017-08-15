"use strict";

const scoreModel = require('../models/score.model');

function createScore(params) {
  return new Promise((resolve, reject) => {
    let score = new scoreModel(params);
    score.save()
      .then(scoreCreated => {
        resolve(scoreCreated)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function fetchScore(userId, categoryId) {
  return new Promise((resolve, reject) => {
    scoreModel.findOne({userId: userId },{ categoryId: categoryId})
      .then(fetchedScore => {
        resolve(fetchedScore)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  createScore,
  fetchScore
};