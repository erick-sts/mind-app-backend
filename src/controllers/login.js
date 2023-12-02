const bcrypt = require('bcrypt');
const Login = require('../models/login');

module.exports = {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      // Validar entradas
      if (!email || !password) {
        res.status(400).json({ success: false, message: 'Informe username e password' });
        return;
      }

      const user = await Login.findOne({
        where: {
          email,
        },
      });

      if (user && bcrypt.compareSync(password, user.password)) {
        // Usuário autenticado com sucesso
        res.json({ success: true, message: 'Login bem-sucedido' });
      } else {
        // Falha na autenticação
        res.status(401).json({ success: false, message: 'Falha na autenticação - Credenciais inválidas' });
      }
    } catch (error) {
      console.error('Erro na autenticação: ', error);
      res.status(500).json({ success: false, message: 'Erro na autenticação', error: error.message });
    }
  },
};
