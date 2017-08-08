"use strict";

const questionService = require('../services/question.service');

function questionCreate(req, res, next) {
  questionService.createQuestion(req.body)
    .then(questionCreated => {
      res.send(questionCreated)
    })
    .catch(err => {
      next(err)
    })
}

function questionList(req, res, next) {
  questionService.listQuestion()
    .then(listedQuestion => {
      res.send(listedQuestion)
    })
    .catch(err => {
      next(err)
    })
}

function questionRetrieve(req, res, next) {
  questionService.fetchQuestion(req.params.categoryId)
    .then(questionRetrieved => {
      res.send(questionRetrieved)
    })
    .catch(err => {
      next(err)
    })
}

function questionDelete(req, res, next) {
  questionService.deleteQuestion(req.params.id)
    .then(deletedQuestion => {
      res.send(deletedQuestion)
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  questionCreate,
  questionList,
  questionRetrieve,
  questionDelete
}