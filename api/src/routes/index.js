const categoriesRouter = require('./categoriesRouter');
const iconsRouter = require('./iconsRouter');
const imagesRouter = require('./imagesRouter');
const logosRouter = require('./logosRouter');

function routerApi(app) {
  app.use('/category', categoriesRouter);
  app.use('/icons', iconsRouter);
  app.use('/images', imagesRouter);
  app.use('/logos', logosRouter);
}

module.exports = routerApi;
