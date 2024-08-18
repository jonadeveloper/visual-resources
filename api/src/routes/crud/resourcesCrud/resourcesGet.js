const express = require('express');
const ResourcesService = require('../../../services/resource.service.js');
const router = express.Router();
const service = new ResourcesService();

router.get('/', (req, res) => {
  const resources = service.find();
  res.status(200).send(resources);
});

module.exports = router;
