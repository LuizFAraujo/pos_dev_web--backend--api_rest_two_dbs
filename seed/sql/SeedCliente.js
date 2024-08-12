import Cliente from '../../models/sql/Cliente.js';
import { clientesData } from './data/ClientesData.js';

export const SeedCliente = async () => {
  try {
    console.log('\n===== SeedCliente.js ===== :  Limpando a tabela...');
    await Cliente.destroy({ where: {} });

    console.log('\n===== SeedCliente.js ===== :  Inserindo dados...');
    await Cliente.bulkCreate(clientesData);

    console.log('\n===== SeedCliente.js ===== :  Dados inseridos. Verificando...');
    const insertedData = await Cliente.findAll();
    console.log(
      '\n===== SeedCliente.js ===== :  Dados inseridos com sucesso:',
      insertedData.map(d => d.toJSON())
    );
  } catch (error) {
    console.error('\n===== SeedCliente.js ===== :  Erro ao popular o banco de dados:', error);
  }
};
