const express = require('express');
const categoriesRouter = require('./categoriesRouter');
const resourcesRouter = require('./resourcesRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/resources', resourcesRouter);
}

module.exports = routerApi;
