const express = require('express');
const router = express.Router();

router.put('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.status.json({
    message: 'update',
    data: body,
    id,
  });
});

module.exports = router;
