const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
