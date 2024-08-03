const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const resource = data.resources.find((re) => re.id === id);

  if (resource) {
    res.status(200).json(resource);
  } else {
    res.status(404).json({ message: 'not found' });
  }
});

module.exports = router;
