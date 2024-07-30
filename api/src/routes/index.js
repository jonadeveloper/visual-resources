const express = require('express');
const categoriesGet = require('./crud/categoriesCrud/categoriesGet');
const categoryforid = require('./crud/categoriesCrud/categoryGet');
const categoryDelete = require('./crud/categoriesCrud/categoryDelete');
const categoryUpdatePartial = require('./crud/categoriesCrud/categoriesPatch');
const categoryUpdate = require('./crud/categoriesCrud/categoriesPut');
const resourcesGet = require('./crud/resourcesCrud/resourcesGet');
const resourceforid = require('./crud/resourcesCrud/resourceGet');
const resourceDelete = require('./crud/resourcesCrud/resourceDelete');
const resourceUpdatePartial = require('./crud/resourcesCrud/resourcesPatch');
const resourceUpdate = require('./crud/resourcesCrud/resourcesPut');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categoriesall', categoriesGet);
  router.use('/category', categoryforid);
  router.use('/categorydelete', categoryDelete);
  router.use('/categorypartialupdate', categoryUpdatePartial);
  router.use('/categoryupdate', categoryUpdate);
  router.use('/resourcesall', resourcesGet);
  router.use('/resource', resourceforid);
  router.use('/resourcedelete', resourceDelete);
  router.use('/resourcepartialupdate', resourceUpdatePartial);
  router.use('/resourceupdate', resourceUpdate);
}

module.exports = routerApi;
