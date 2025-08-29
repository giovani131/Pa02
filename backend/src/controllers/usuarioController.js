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

async function editarUsuario(req, res) {
  try {
    //por enquanto o id vem pelo body, mas ele vai vir pelo token
    const { id, nome, telefone, email, senha } = req.body;

    if (!nome || !telefone || !email || !senha) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios!' });
    }

    const usuarioAtualizado = await usuarioServices.editarUsuario(id, { nome, telefone, email, senha });

    res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      user: {
        id: usuarioAtualizado.id,
        nome: usuarioAtualizado.nome,
        telefone: usuarioAtualizado.telefone,
        email: usuarioAtualizado.email,
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}



module.exports = { cadastrarUsuario, editarUsuario };
