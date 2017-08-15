"use strict";

const express = require('express');
const router = express.Router();

const scoreController = require('../controller/score.controller');

router.post('/scores', scoreController.createScore);
router.get('/scores', scoreController.fetchScore);

module.exports = router;