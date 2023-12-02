const express = require('express');
const controlerCursos = require('./controllers/cursos');
const controlerLogin = require('./controllers/login')
const router = express.Router();
const controlerCadastro = require('./controllers/cadastro');

// Rota para lidar com a solicitação POST
router.post('/', (req, res) => {
  // Lógica para lidar com a solicitação POST aqui
  res.send('Recebido com sucesso!');
});

router.post('/cadastro', controlerCadastro.cadastrarUsuario);
router.post('/login', controlerLogin.authenticate);
router.get('/List', controlerCursos.List);
router.post('/Create', controlerCursos.Create);
router.post('/Update', controlerCursos.Update);
router.post('/GetOne', controlerCursos.GetOne);
router.delete('/Delete/:id', controlerCursos.Delete);

module.exports = router;