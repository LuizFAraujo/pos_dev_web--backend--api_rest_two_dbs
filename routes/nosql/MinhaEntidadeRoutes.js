import express from "express";
import MinhaEntidade from "../../models/nosql/MinhaEntidade.js";

const router = express.Router();

// Rota para listar todas as entidades
router.get("/", async (req, res) => {
  try {
    const entidades = await MinhaEntidade.find();
    res.json(entidades);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar entidades" });
  }
});

// Rota para listar uma entidade por ID
router.get("/:id", async (req, res) => {
  try {
    const entidade = await MinhaEntidade.findById(req.params.id);
    if (!entidade) {
      return res.status(404).json({ error: "Entidade não encontrada" });
    }
    res.json(entidade);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar entidade" });
  }
});

// Rota para adicionar uma nova entidade
router.post("/", async (req, res) => {
  try {
    const novaEntidade = new MinhaEntidade({
      campo1: req.body.campo1,
      campo2: req.body.campo2,
    });
    const entidadeSalva = await novaEntidade.save();
    res.status(201).json(entidadeSalva);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar entidade" });
  }
});

export default router;
