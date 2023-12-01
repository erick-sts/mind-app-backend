const express = require('express');
const controlerCursos =  require ('./controllers/cursos');
const controlerLogin = require('./controllers/login')
const router = express.Router();

router.post('/login', controlerLogin.authenticate);

router.get('/List', controlerCursos.List);

router.post('/Create', controlerCursos.Create);

router.post('/Update', controlerCursos.Update);

router.post('/GetOne', controlerCursos.GetOne);

router.post('/Delete', controlerCursos.Delete);

module.exports = router;