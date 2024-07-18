const express = require('express');
const router = express.Router();
const resources = require('../../../data/resources.json');

router.get('/', (req, res) => {
  const resourcesAll = [];
  resourcesAll.push(resources);
  res.send(resourcesAll);
});

router.get('/icons', (req, res) => {
  const iconsAll = [];
  iconsAll.push(resources.icons);
  res.send(iconsAll);
});

router.get('/logos', (req, res) => {
  const logosAll = [];
  logosAll.push(resources.logos);
  res.send(logosAll);
});

module.exports = router;
