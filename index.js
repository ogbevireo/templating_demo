const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('<h1>Hey! is it still working?</h1>');
})

app.listen(3000, (req, res) => {
  console.log('Listening on port: 3000');
})