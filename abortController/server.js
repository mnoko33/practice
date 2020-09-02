const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/', (req, res) => {
  const id = req.query.id
  setTimeout(() => {
    res.json({ id });
  }, 2000)
})

app.listen(80, () => {
  console.log('app is running')
})