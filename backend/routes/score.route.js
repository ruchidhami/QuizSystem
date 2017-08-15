"use strict";

const express = require('express');
const router = express.Router();

const scoreController = require('../controller/score.controller');

router.post('/scores', scoreController.createScore);
router.get('/users/:userId/categories/:categoryId/scores', scoreController.fetchScore);
router.get('/scores', scoreController.listScore);

module.exports = router;