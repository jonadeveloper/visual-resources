const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const subcategory = data.subcategories.find((sc) => sc.id === id);

  if (subcategory) {
    res.status(200).json(subcategory);
  } else {
    res.status(404).json({ message: 'not found' });
  }
});

module.exports = router;
