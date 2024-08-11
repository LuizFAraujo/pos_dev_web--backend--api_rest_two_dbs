import sequelize from './dataSequelize.js';

export const syncDatabase = async () => {
  try {
    // Autentica a conexão com o banco de dados
    await sequelize.authenticate();

    console.log('\n===== syncDatabase.js ===== : Conectado ao PostgreSQL com sucesso');

    // Sincroniza todos os modelos definidos
    // `force: true` recria as tabelas; usar com cuidado em produção
    // Em produção, considere usar `alter: true` para alterar o esquema sem apagar dados
    await sequelize.sync({ force: false });

    console.log('\n===== syncDatabase.js ===== : Tabelas sincronizadas com sucesso');
  } catch (error) {
    console.error('\n===== syncDatabase.js ===== : Erro ao conectar ou sincronizar o banco de dados:', error, '');
  }
  // finally {
  //   // Fecha a conexão com o banco de dados

  //   try {
  //     await sequelize.close();
  //     console.log('\n===== syncDatabase.js ===== : Desconectado do PostgreSQL com sucesso');
  //   } catch (closeError) {
  //     console.error('\n===== syncDatabase.js ===== : Erro ao fechar a conexão com o banco de dados:', closeError, '');
  //   }
  // }
};
