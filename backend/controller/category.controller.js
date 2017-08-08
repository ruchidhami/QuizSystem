"use strict";

const categoryService = require('../services/category.service');

function categoryCreate(req, res, next) {
  categoryService.createCategory(req.body)
    .then(createdCategory => {
      res.send(createdCategory);
    })
    .catch(err => {
      next(err);
    })
}


function categoryList(req, res, next) {
  categoryService.listCategory()
    .then(listedCategory => {
      res.send(listedCategory)
})
    .catch(err => {
      next(err)
    })
}

function categoryRetrieve(req, res, next) {
  categoryService.retrieveCategory(req.params.id)
    .then(retrievedCategory => {
      res.send(retrievedCategory)
    })
    .catch(err => {
      next(err)
    })
}

function categoryDelete(req, res, next) {
  categoryService.deleteCategory(req.params.id)
    .then(deletedCategory => {
      res.send(deletedCategory)
    })
    .catch(err => {
      next(err)
    })
}

module.exports ={
  categoryCreate,
  categoryList,
  categoryDelete,
  categoryRetrieve
}