const express = require('express');
const router = express.Router();
const data = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const resourcesAll = [];
  resourcesAll.push(data.resources);
  res.status(200).send(resourcesAll);
});

module.exports = router;
