const express = require('express');
require('dotenv');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Estoy vivo!')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Fala comigo na porta ${PORT}`)
});
