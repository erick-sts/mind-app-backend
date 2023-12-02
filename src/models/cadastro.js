const bcrypt = require('bcrypt');
const Login = require('../models/login');

module.exports = {
  cadastrarUsuario: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Hash da senha usando bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crie um novo usuário na tabela logins
      const novoCadastro = await Login.create({ email, password: hashedPassword });

      res.status(201).json({ success: true, message: 'Cadastro realizado com sucesso' });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
  },
};
