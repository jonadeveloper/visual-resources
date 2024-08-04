const express = require('express');
const router = express.Router();

router.put('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.status(200).json({
    message: 'resource updated successfully',
    data: body,
    id,
  });
});

module.exports = router;
