const express = require('express');
const categoriesGet = require('./crud/categoriesCrud/categoriesGet');
const categoryforid = require('./crud/categoriesCrud/categoryGetForID');
const categoryCreated = require('./crud/categoriesCrud/categoriesPost');
const categoryDelete = require('./crud/categoriesCrud/categoryDelete');
const categoryUpdate = require('./crud/categoriesCrud/categoriesPut');
const resourcesGet = require('./crud/resourcesCrud/resourcesGet');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesGet);
  router.use('/category', categoryforid);
  router.use('/categorycreated', categoryCreated);
  router.use('/categorydeleted', categoryDelete);
  router.use('/categoryupdate', categoryUpdate);
  router.use('/resources', resourcesGet);
}

module.exports = routerApi;
