const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = data.categories.find((cat) => cat.id === id);

  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ message: 'not found' });
  }
});

module.exports = router;
