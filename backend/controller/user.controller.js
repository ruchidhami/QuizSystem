"use strict";

const userService = require('../services/user.service');

function userCreate(req, res, next) {
  userService.createUser(req.body)
    .then(createdUser => {
      res.send(createdUser);
    })
    .catch(err => {
      next(err)
    })
}

function userList(req, res, next) {
  userService.listUser()
    .then(listedUser => {
      res.send(listedUser)
    })
    .catch(err => {
      next(err)
    })
}

function getByUserName(req, res, next) {
  userService.getUserByUsername(req.body)
    .then(gotUsername => {
      res.send(gotUsername);
    })
    .catch(err => {
      next(err)
    })
}

function userDelete(req, res, next) {
  userService.deleteUser(req.params.id)
    .then(deletedUser => {
      res.send(deletedUser)
    })
    .catch(err => {
      next(err)
    })
}

module.exports ={
  userCreate,
  userList,
  userDelete,
  getByUserName
}