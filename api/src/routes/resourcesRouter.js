const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hola soy un recurso');
});

router.get('/filter', (req, res) => {
  res.send('hola soy un filtro de tus recursos');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'resource1',
    price: 2000,
  });
});

module.exports = router;
