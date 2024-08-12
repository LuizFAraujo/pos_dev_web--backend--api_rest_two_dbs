import express from 'express';
import Produto from '../../models/nosql/Produto.js';

const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Rota para listar um produto por ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Rota para adicionar um novo produto
router.post('/', async (req, res) => {
  try {
    const novoProduto = new Produto({
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
      estoque: req.body.estoque,
      categoria: req.body.categoria
    });
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

export default router;
