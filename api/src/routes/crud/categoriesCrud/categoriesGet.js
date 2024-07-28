const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const categories = [];
  categories.push(data.categories);
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('hola soy un filtro de tus categorias');
});

module.exports = router;
