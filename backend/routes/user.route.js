"use strict";

const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');
const authorizationController = require('../controller/authorization.controller');

router.post('/user/signup', userController.userCreate);
router.get('/users', userController.userList);
router.delete('/user/:userId', userController.userDelete);
router.post('/user/signin', authorizationController.login);
router.get('/user/getByUsername', userController.getByUserName);

module.exports = router;