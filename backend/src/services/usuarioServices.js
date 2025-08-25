const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

async function criarUsuario({ nome, telefone, email, senha }) {
  
    const userExiste = await Usuario.findOne({ email });
  if (userExiste) {
    throw new Error("Usuário já cadastrado com esse email!");
  }

  const senhaCriptografa = await bcrypt.hash(senha, 10);

  const novoUsuario = new Usuario({
    nome,
    telefone,
    email,
    senha: senhaCriptografa,
  });

  return await novoUsuario.save();
}

module.exports = { criarUsuario };
