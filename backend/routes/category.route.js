"use strict";

const express = require('express');
const router = express.Router();

const categoryController = require('../controller/category.controller');

router.post('/category', categoryController.categoryCreate);
router.get('/categories', categoryController.categoryList);
router.get('/category/:id', categoryController.categoryRetrieve);
router.delete('/category/:id', categoryController.categoryDelete);

module.exports = router;