const express = require('express');
const router = express.Router();
const data = require('../../../data/categories.json');

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
