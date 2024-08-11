import express from "express";
import EntidadeTesteSql from "../../models/sql/EntidadeTesteSql.js";

const router = express.Router();

// Rota para listar todas as entidades
router.get("/", async (req, res) => {
  try {
    const entidades = await EntidadeTesteSql.findAll();
    res.json(entidades);
  } catch (error) {
    console.error("Erro ao buscar entidades:", error);
    res.status(500).json({ error: "Erro ao buscar entidades" });
  }
});

// Rota para criar uma nova entidade
router.post("/", async (req, res) => {
  try {
    const { campo1, campo2 } = req.body;
    const novaEntidade = await EntidadeTesteSql.create({ campo1, campo2 });
    res.status(201).json(novaEntidade);
  } catch (error) {
    console.error("Erro ao criar entidade:", error);
    res.status(500).json({ error: "Erro ao criar entidade" });
  }
});

// Rota para buscar uma entidade por ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entidade = await EntidadeTesteSql.findByPk(id);

    if (entidade) {
      res.json(entidade);
    } else {
      res.status(404).json({ error: "Entidade não encontrada" });
    }
  } catch (error) {
    console.error("Erro ao buscar entidade:", error);
    res.status(500).json({ error: "Erro ao buscar entidade" });
  }
});

export default router;
