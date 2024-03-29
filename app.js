const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/v1/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
app.listen(80, () => console.log(`Listening on: 80`));
//feature test change 1