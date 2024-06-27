const resourcesRouter = require('./resourcesRouter');

function routerApi(app) {
  app.use('/resources', resourcesRouter);
}

module.exports = routerApi;
