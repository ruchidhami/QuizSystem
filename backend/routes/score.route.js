"use strict";

const express = require('express');
const router = express.Router();

const scoreController = require('../controller/score.controller');

router.put('/scores', scoreController.updateScore);
router.get('/users/:userId/categories/:categoryId/scores', scoreController.fetchScore);
router.get('/categories/:categoryId/scores', scoreController.fetchCategoryUser);
router.get('/scores', scoreController.listScore);

module.exports = router;