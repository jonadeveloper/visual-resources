const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const subcategories = [];
  subcategories.push(data.subcategories);
  res.status(200).json(subcategories);
});

module.exports = router;
