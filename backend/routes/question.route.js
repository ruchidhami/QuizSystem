"use strict";

const express = require('express');
const router = express.Router();

const questionController = require('../controller/question.controller');

router.post('/questions', questionController.questionCreate);
router.get('/questions', questionController.questionList);
router.get('/questions/:categoryId', questionController.questionRetrieve);
router.delete('/questions/:id', questionController.questionDelete);

module.exports = router;