const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarUsuario", usuarioController.cadastrarUsuario);
router.patch("/editarUsuario", usuarioController.editarUsuario);

module.exports = router;
