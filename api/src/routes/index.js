const express = require('express');
const categoriesGet = require('./crud/categoriesCrud/categoriesGet');
const categoryforid = require('./crud/categoriesCrud/categoryGet');
const categoryDelete = require('./crud/categoriesCrud/categoryDelete');
const categoryUpdatePartial = require('./crud/categoriesCrud/categoriesPatch');
const categoryUpdate = require('./crud/categoriesCrud/categoriesPut');
const resourcesGet = require('./crud/resourcesCrud/resourcesGet');
const resourceforid = require('./crud/resourcesCrud/resourceGet');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesGet);
  router.use('/category', categoryforid);
  router.use('/categorydeleted', categoryDelete);
  router.use('/categorypartialupdate', categoryUpdatePartial);
  router.use('/categoryupdate', categoryUpdate);
  router.use('/resourcesall', resourcesGet);
  router.use('/resource', resourceforid);
}

module.exports = routerApi;
