const express = require('express');
const app = express();

app.listen(3210, () => {
  console.log('Сервер запущен на порту 3001');
});

app.get('/', (req, res) => {
  console.log('Сделали запррос');
  res.send('Бэк для чата почти готов');
});

app.get('/setLogin', (req, res) => {
  console.log('Сделали запррос на установку логина');
  res.send('Бэк для чата почти готов');
});