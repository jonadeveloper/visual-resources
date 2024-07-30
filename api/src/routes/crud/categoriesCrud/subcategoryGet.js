const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const subcategory = data.subcategories.find((sc) => sc.id === id);

  if (subcategory) {
    res.json(subcategory);
  } else {
    res.status(404).send({ message: 'Categoría no encontrada' });
  }
});

module.exports = router;
