const express = require('express');
const router = express.Router();

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

module.exports = router;
