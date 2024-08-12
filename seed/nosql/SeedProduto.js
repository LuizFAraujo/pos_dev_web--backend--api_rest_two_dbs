import mongoose from 'mongoose';
import Produto from '../../models/nosql/Produto.js';
import { noSqlString } from '../../loadEnv.js';
import { ProdutosData } from './data/ProdutosData.js'; // Importa os dados com o caminho correto

export const SeedDataProduto = async () => {
  try {
    await mongoose.connect(noSqlString); // Aguarde a conexão
    console.log('===== SeedProduto.js ===== :  Conectado ao MongoDB');

    // Limpa a coleção antes de inserir
    await Produto.deleteMany();

    // Insere os dados
    await Produto.insertMany(ProdutosData);

    // Verifica se os dados foram realmente inseridos
    const dadosInseridos = await Produto.find();
    console.log('\n===== SeedProduto.js ===== :  ###########################################################');
    console.log('Dados inseridos com sucesso');
    console.log('Dados no banco de dados:');
    console.log(dadosInseridos);
    console.log('===== SeedProduto.js ===== :  ###########################################################\n');
  } catch (err) {
    console.error('\n===== SeedProduto.js ===== :  Erro ao popular o banco de dados:', err);
  } finally {
    await mongoose.disconnect(); // Aguarde a desconexão
    console.log('\n===== SeedProduto.js ===== :  Desconectado do MongoDB');
  }
};
