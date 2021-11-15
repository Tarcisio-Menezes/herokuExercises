const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Estoy vivo!')
});

app.listen(3000, () => {
  console.log('Fala comigo na porta 3000')
});
