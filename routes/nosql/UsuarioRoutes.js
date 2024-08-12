import express from "express";
import Usuario from "../../models/nosql/Usuario.js";

const router = express.Router();

// Rota para listar todos os usuários
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Rota para listar um usuário por ID
router.get("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// Rota para adicionar um novo usuário
router.post("/", async (req, res) => {
  try {
    const novoUsuario = new Usuario({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      dataDeNascimento: req.body.dataDeNascimento,
      endereco: req.body.endereco,
    });
    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json(usuarioSalvo);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

export default router;
