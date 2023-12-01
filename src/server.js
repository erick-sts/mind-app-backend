// const express  = require('express');

// const cors = require('cors');

// const app = express();

// app.use(cors());

// const router = require('./router')

// api.use(express.json());
// api.use(router);

// api.listen(4200);

const express = require('express');
const cors = require('cors');
const router = require('./router');

const api = express();

// Habilitar o CORS para todas as rotas
api.use(cors());

// Parse do corpo da requisição como JSON
api.use(express.json());

// Usar o seu roteador
api.use(router);

const PORT = 4200;
api.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

api.use(cors({
  origin: 'http://localhost:19006/',
  optionsSuccessStatus: 200,
}));