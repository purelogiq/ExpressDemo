const express = require('express');
const app = express();
const path = require('path');

const quotes = [
  'The sky is blue',
  'The grass is green',
  'The ocean is vast',
  'The earth is massive',
  'The stars are bright'
];

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/quote', (req, res) => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});


app.listen(3000, () => console.log('Gator app listening on port 3000!'));
