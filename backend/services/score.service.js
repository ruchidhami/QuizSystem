"use strict";

const scoreModel = require('../models/score.model');

function updateScore(params) {
  return new Promise((resolve, reject) => {
    scoreModel.findOneAndUpdate(params)
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
    scoreModel.findOne({userId: userId , categoryId: categoryId})
      .then(fetchedScore => {
        resolve(fetchedScore || {})
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
  listScore
};