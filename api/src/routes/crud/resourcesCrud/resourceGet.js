const express = require('express');
const router = express.Router();
const ResourcesService = require('../../../services/resource.service.js');
const service = new ResourcesService();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const resource = service.findOne(id);
  if (resource) {
    res.status(200).json(resource);
  } else {
    res.status(404).json({ message: 'not found' });
  }
});

module.exports = router;
