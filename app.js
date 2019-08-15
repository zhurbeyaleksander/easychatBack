const express = require('express');
const app = express();

app.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});

app.get('/', (req, res) => {
  console.log('Сделали запррос');
  res.send('Бэк для чата почти готов');
});