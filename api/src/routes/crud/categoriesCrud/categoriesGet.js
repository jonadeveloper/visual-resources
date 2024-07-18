const express = require('express');
const router = express.Router();
const data = require('../../../data/categories.json');

router.get('/', (req, res) => {
  const categories = [];
  categories.push(data.categories);
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('hola soy un filtro de tus categorias');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = data.categories.find((cat) => cat.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).send({ message: 'Categoría no encontrada' });
  }
});

router.get('/subcategories', (req, res) => {
  const subCategories = [];
  subCategories.push(data.subcategories);
  res.json(subCategories);
});

router.get('/subcategories/:id', (req, res) => {
  const { id } = req.params;
  const subCategory = data.subcategories.find((sc) => sc.id === id);

  if (subCategory) {
    res.json(subCategory);
  } else {
    res.status(404).send({ message: 'Categoría no encontrada' });
  }
});

module.exports = router;
