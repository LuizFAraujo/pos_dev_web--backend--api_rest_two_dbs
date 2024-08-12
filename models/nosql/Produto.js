import mongoose from 'mongoose';

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  estoque: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true
  }
});

const Produto = mongoose.model('Produto', ProdutoSchema);

export default Produto;
