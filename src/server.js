const express = require('express');
const cors = require('cors');
const router = require('./router');

const api = express();

// Habilitar o CORS para todas as rotas
api.use(cors());

// Parse do corpo da requisição como JSON
api.use(express.json());

// Use o seu roteador
api.use(router);

const PORT = 4200;
api.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
