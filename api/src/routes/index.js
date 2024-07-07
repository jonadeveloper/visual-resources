const categoriesRouter = require('./categoriesRouter');
const resourcesRouter = require('./resourcesRouter');

function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/resources', resourcesRouter);
}

module.exports = routerApi;
