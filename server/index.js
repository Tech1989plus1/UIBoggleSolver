const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:search', (req, res) => {
  console.log(req.params);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));