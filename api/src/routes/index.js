const express = require('express');
const categoriesGet = require('./crud/categoriesCrud/categoriesGet');
const categoryforid = require('./crud/categoriesCrud/categoryGet');
const categoryCreate = require('./crud/categoriesCrud/categoryPost');
const categoryDelete = require('./crud/categoriesCrud/categoryDelete');
const categoryUpdatePartial = require('./crud/categoriesCrud/categoriesPatch');
const categoryUpdate = require('./crud/categoriesCrud/categoriesPut');

const resourcesGet = require('./crud/resourcesCrud/resourcesGet');
const resourceforid = require('./crud/resourcesCrud/resourceGet');
const resourceCreate = require('./crud/resourcesCrud/resourcePost');
const resourceDelete = require('./crud/resourcesCrud/resourceDelete');
const resourceUpdatePartial = require('./crud/resourcesCrud/resourcesPatch');
const resourceUpdate = require('./crud/resourcesCrud/resourcesPut');

const subcategoriesGet = require('./crud/categoriesCrud/subcategoriesGet');
const subcategoryforid = require('./crud/categoriesCrud/subcategoryGet');
const subcategoryCreate = require('./crud/categoriesCrud/subcategoryPost');
const subcategoryDelete = require('./crud/categoriesCrud/subcategoryDelete');
const subcategoryUpdatePartial = require('./crud/categoriesCrud/subcategoriesPatch');
const subcategoryUpdate = require('./crud/categoriesCrud/subcategoriesPut');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categoriesall', categoriesGet);
  router.use('/category', categoryforid);
  router.use('/categorycreate', categoryCreate);
  router.use('/categorydelete', categoryDelete);
  router.use('/categorypartialupdate', categoryUpdatePartial);
  router.use('/categoryupdate', categoryUpdate);

  router.use('/resourcesall', resourcesGet);
  router.use('/resource', resourceforid);
  router.use('/resourcecreate', resourceCreate);
  router.use('/resourcedelete', resourceDelete);
  router.use('/resourcepartialupdate', resourceUpdatePartial);
  router.use('/resourceupdate', resourceUpdate);

  router.use('/subcategoriesall', subcategoriesGet);
  router.use('/subcategory', subcategoryforid);
  router.use('/subcategorycreate', subcategoryCreate);
  router.use('/subcategorydelete', subcategoryDelete);
  router.use('/subcategorypartialupdate', subcategoryUpdatePartial);
  router.use('/subcategoryupdate', subcategoryUpdate);
}

module.exports = routerApi;
