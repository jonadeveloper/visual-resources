const express = require('express');
const categoriesGet = require('./crud/categoriesCrud/categoriesGet');
const categoryCreated = require('./crud/categoriesCrud/categoriesPost');
const resourcesGet = require('./crud/resourcesCrud/resourcesGet');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesGet);
  router.use('/categorycreated', categoryCreated);
  router.use('/resources', resourcesGet);
}

module.exports = routerApi;
