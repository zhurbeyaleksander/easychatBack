const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const corsOption ={
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.listen(3210, () => {
  console.log('Сервер запущен на порту 3210');
});

app.get('/', cors(corsOption), (req, res) => {
  console.log('Сделали запррос');
  res.send('Бэк для чата почти готов');
});

app.post('/signup', cors(corsOption), (req, res) => {
  console.log('Сделали запррос на установку логина');
  setTimeout(() => {
    res.send('Test')
  }, 5000);
 
});