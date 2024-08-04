const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'resource created successfully',
    data: body,
  });
});

module.exports = router;
