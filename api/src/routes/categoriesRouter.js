const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hola soy una categoria');
});

router.get('/filter', (req, res) => {
  res.send('hola soy un filtro de tus categorias');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'cat1',
    price: 2000,
  });
});

module.exports = router;
