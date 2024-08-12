import { runCreateDataIfNotExists } from '../db/config/CreateDatabaseSQL.js';
import { syncDatabase } from '../db/config/syncDatabase.js';
import { SeedDataUsuario } from './nosql/SeedUsuario.js';
import { SeedDataProduto } from './nosql/SeedProduto.js'; // Adiciona SeedDataProduto
import { SeedEntidadeTesteSql } from './sql/SeedEntidadeTesteSql.js';

export async function runSeedDataInit() {
  try {
    // Criar banco de dados PostgreSQL se não existir
    await runCreateDataIfNotExists();

    // Sincronizar o banco de dados e tabelas
    await syncDatabase();

    // Inicializar dados para MongoDB
    await SeedDataUsuario();
    await SeedDataProduto();

    // Inicializar dados para SQL
    await SeedEntidadeTesteSql();

    console.log('\n===== seedDataInit.js ===== :  Inicialização de dados concluída.');
  } catch (error) {
    console.error('\n===== seedDataInit.js ===== :  Erro ao inicializar dados:', error);
  }
}

runSeedDataInit();
