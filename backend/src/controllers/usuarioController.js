const usuarioServices = require("../services/usuarioServices");

async function cadastrarUsuario(req, res) {
  try {
    const { nome, telefone, email, senha } = req.body;

    if (!nome || !telefone || !email || !senha) {
      return res.status(400).json({ message: "Preencha todos os campos!" });
    }

    const usuario = await usuarioServices.criarUsuario({ nome, telefone, email, senha });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      user: {
        id: usuario.id,
        nome: usuario.nome,
        telefone: usuario.telefone,
        email: usuario.email,
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { cadastrarUsuario };
