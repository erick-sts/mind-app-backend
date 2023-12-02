const express = require('express');
const cors = require('cors');
const router = require('./router');

const api = express();

api.use(cors());

api.use(express.json());


api.use(router);

const PORT = 4200;
api.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
