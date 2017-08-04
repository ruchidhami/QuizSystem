"use strict";

const userService = require('../services/user.service');
const devConfig = require('../config/development.json');

const Promise = require('bluebird');

function setup() {
  return new Promise((resolve, reject) => {
    userService.listUser({role: devConfig.role})
      .then(listedUser => {
          if(listedUser.length) {
            resolve({
              message:  'SuperAdmin already exists!'
            })
          }
          else{
            const superAdminDetail = {
              username: devConfig.username,
              email: devConfig.email,
              password: devConfig.password,
              role: devConfig.role
            };
            userService.createUser(superAdminDetail)
              .then(superAdminCreated => {
                resolve(superAdminCreated)
              })
              .catch(err => {
                reject(err);
              })
          }
      })
      .catch(err => {
        reject(err);
      })
  })
}

module.exports = {
  setup
};