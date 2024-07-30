const express = require('express');
const routerApi = require('./src/routes/index');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('connect ok');
});

app.listen(port, () => {
  console.log('mi puerto es ' + port);
});

routerApi(app);

module.exports = app;
