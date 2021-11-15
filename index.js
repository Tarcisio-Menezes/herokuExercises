const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
const SECRET = process.env.SECRET || 'Deu ruim';

app.get('/', (_req, res) => {
  res.status(200).send(`Estoy vivo! ${SECRET}`)
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Fala comigo na porta ${PORT}`)
});
