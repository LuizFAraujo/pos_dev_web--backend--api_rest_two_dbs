import express from 'express';
import Cliente from '../../models/sql/Cliente.js';

const router = express.Router();

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  try {
    const { nome, email, idade, dataCriacao } = req.body;
    const novoCliente = await Cliente.create({ nome, email, idade, dataCriacao });
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
});

// Rota para buscar um cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
});

export default router;
