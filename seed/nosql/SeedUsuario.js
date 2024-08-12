import mongoose from 'mongoose';
import Usuario from '../../models/nosql/Usuario.js';
import { noSqlString } from '../../loadEnv.js';
import { UsuariosData } from './data/UsuariosData.js'; // Importa os dados com o caminho correto

export const SeedDataUsuario = async () => {
  try {
    await mongoose.connect(noSqlString); // Aguarde a conexão
    console.log('===== SeedUsuario.js ===== :  Conectado ao MongoDB');

    // Limpa a coleção antes de inserir
    await Usuario.deleteMany();

    // Insere os dados
    await Usuario.insertMany(UsuariosData);

    // Verifica se os dados foram realmente inseridos
    const dadosInseridos = await Usuario.find();
    console.log('\n===== SeedUsuario.js ===== :  ###########################################################');
    console.log('Dados inseridos com sucesso');
    console.log('Dados no banco de dados:');
    console.log(dadosInseridos);
    console.log('===== SeedUsuario.js ===== :  ###########################################################\n');
  } catch (err) {
    console.error('\n===== SeedUsuario.js ===== :  Erro ao popular o banco de dados:', err);
  } finally {
    await mongoose.disconnect(); // Aguarde a desconexão
    console.log('\n===== SeedUsuario.js ===== :  Desconectado do MongoDB');
  }
};
