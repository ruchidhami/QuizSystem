"use strict";

const express = require('express');
const router = express.Router();

const questionController = require('../controller/question.controller');

router.post('/question', questionController.questionCreate);
router.get('/questions', questionController.questionList);
router.delete('/question/:id', questionController.questionDelete);

module.exports = router;