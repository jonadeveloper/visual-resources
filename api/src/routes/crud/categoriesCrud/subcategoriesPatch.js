const express = require('express');
const router = express.Router();

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'Subcategory partially updated successfully',
    data: body,
    id,
  });
});

module.exports = router;
