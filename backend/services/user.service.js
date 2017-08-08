"use strict";

const userModel = require('../models/user.model');
var bcrypt = require('bcryptjs');

function createUser(userParams) {
  return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function(err, salt) {
        let user = new userModel(userParams);
        bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash;
          user.save()
            .then(userCreated => {
              resolve(userCreated);
            })
            .catch(err => {
              reject(err);
            })
        });
      });
    })
}

function comparePassword(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) {
      throw err;
    }
    else {
      callback(null, isMatch);
    }
  });
}

function getUserByUsername(username){
  return new Promise((resolve, reject) => {
    var query = {username: username};
    console.log(query, 'wsddsadassdfasd')
    userModel.findOne(query)
      .then(user => {
        resolve(user)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function listUser(filterParams) {
  return new Promise((resolve, reject) => {
    userModel.find(filterParams)
      .then(listedUser => {
        resolve(listedUser)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function deleteUser(params) {
  return new Promise((resolve, reject) => {
    userModel.findOneAndRemove(params)
      .then(deletedUser => {
        resolve(deletedUser)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports ={
  createUser,
  listUser,
  deleteUser,
  comparePassword,
  getUserByUsername
};