const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'create',
    data: body,
  });
});

module.exports = router;
