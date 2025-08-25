const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarUsuario", usuarioController.cadastrarUsuario);

module.exports = router;
