"use strict";

const userService = require('../services/user.service');

function login(req, res, next) {
  const user = req.body.username;
  userService.getUserByUsername(user)
    .then(user => {
      if(user !== null){
        res.send(user)
      }
    })
    .catch(err => {
      next(err);
    })
}

module.exports = {
  login
};