"use strict";

const scoreService = require('../services/score.service');

function updateScore(req, res, next) {
  scoreService.updateScore(req.body)
    .then(scoreCreated => {
      res.send(scoreCreated)
    })
    .catch(err => {
      next(err)
    })
}

function fetchScore(req, res, next) {
  scoreService.fetchScore(req.params.userId, req.params.categoryId)
    .then(fetchedScore => {
      res.send(fetchedScore)
    })
    .catch(err => {
      next(err)
    })
}

function fetchCategoryUser(req, res, next) {
  scoreService.fetchCategoryUser(req.params.categoryId)
    .then(fetchedCategoryUser => {
      res.send(fetchedCategoryUser)
    })
    .catch(err => {
      next(err)
    })
}

function listScore(req, res, next) {
  scoreService.listScore()
    .then(fetchedScore => {
      res.send(fetchedScore)
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  updateScore,
  fetchScore,
  listScore,
  fetchCategoryUser
};