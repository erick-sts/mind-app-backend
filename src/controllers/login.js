const Login = require('../models/login');

module.exports = {
  async authenticate(req, res) {
    try {
      const { username, password } = req.body;

      const user = await Login.findOne({
        where: {
          username,
          password,
        },
      });

      if (user) {
        // Usuário autenticado com sucesso
        res.json({ success: true, message: 'Login bem-sucedido' });
      } else {
        // Falha na autenticação
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
      }
    } catch (error) {
      console.error('Erro na autenticação: ', error);
      res.status(500).json({ error: 'Erro na autenticação' });
    }
  },
};
