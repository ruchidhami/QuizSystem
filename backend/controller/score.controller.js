"use strict";

const scoreService = require('../services/score.service');

function createScore(req, res, next) {
  scoreService.createScore(req.body)
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

module.exports = {
  createScore,
  fetchScore
};