const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const categories = [];
  categories.push(data.categories);
  res.status(200).json(categories);
});

module.exports = router;
