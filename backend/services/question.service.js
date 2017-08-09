"use strict";

const questionModel = require('../models/question.model');

function createQuestion(quesParam) {
  return new Promise((resolve, reject) => {
      let question = new questionModel(quesParam);
      question.save()
        .then(questionCreated => {
          resolve(questionCreated);
        })
        .catch(err => {
          reject(err)
        })
  })
}

function listQuestion() {
  return new Promise((resolve, reject) => {
    questionModel.find()
      .then(listedQuestion => {
        resolve(listedQuestion)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function fetchQuestion(categoryId) {
  return new Promise((resolve, reject) => {
    questionModel.find({categoryId: categoryId})
      .then(fetchedQuestion => {
        resolve(fetchedQuestion)
    })
      .catch(err => {
        reject(err)
      })
  })
}

function deleteQuestion(id) {
  return new Promise((resolve, reject) => {
    questionModel.findOneAndRemove(id)
      .then(questionDeleted => {
        resolve(questionDeleted)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports ={
  createQuestion,
  listQuestion,
  fetchQuestion,
  deleteQuestion
};