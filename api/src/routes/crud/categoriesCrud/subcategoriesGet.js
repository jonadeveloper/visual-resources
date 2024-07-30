const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const subcategories = [];
  subcategories.push(data.subcategories);
  res.json(subcategories);
});

router.get('/filter', (req, res) => {
  res.send('hola soy un filtro de tus categorias');
});

module.exports = router;
