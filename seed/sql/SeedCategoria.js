import Categoria from '../../models/sql/Categoria.js';
import { categoriasData } from './data/CategoriasData.js';
export const SeedCategoria = async () => {
  try {
    console.log('\n===== SeedCategoria.js ===== :  Limpando a tabela...');
    await Categoria.destroy({ where: {} });

    console.log('\n===== SeedCategoria.js ===== :  Inserindo dados...');
    await Categoria.bulkCreate(categoriasData);

    console.log('\n===== SeedCategoria.js ===== :  Dados inseridos. Verificando...');
    const insertedData = await Categoria.findAll();
    console.log(
      '\n===== SeedCategoria.js ===== :  Dados inseridos com sucesso:',
      insertedData.map(d => d.toJSON())
    );
  } catch (error) {
    console.error('\n===== SeedCategoria.js ===== :  Erro ao popular o banco de dados:', error);
  }
};
