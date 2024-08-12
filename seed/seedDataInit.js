import { runCreateDataIfNotExists } from '../db/config/CreateDatabaseSQL.js';
import { syncDatabase } from '../db/config/syncDatabase.js';
import { SeedDataUsuario } from './nosql/SeedUsuario.js';
import { SeedDataProduto } from './nosql/SeedProduto.js';
import { SeedCliente } from './sql/SeedCliente.js';
import { SeedCategoria } from './sql/SeedCategoria.js';

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
    await SeedCliente();
    await SeedCategoria();

    console.log('\n===== seedDataInit.js ===== :  Inicialização de dados concluída.');
  } catch (error) {
    console.error('\n===== seedDataInit.js ===== :  Erro ao inicializar dados:', error);
  }
}

runSeedDataInit();
