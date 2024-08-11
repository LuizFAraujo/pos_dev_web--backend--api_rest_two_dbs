import pkg from "pg";
const { Client } = pkg;
import { sqlString, sqlDbName } from "../../loadEnv.js";

const adminClient = new Client({
  connectionString: sqlString.replace(/\/[^/]+$/, "/postgres"),
});

export const runCreateDataIfNotExists = async () => {
  try {
    await adminClient.connect();
    console.log(
      "\n===== CreateDatabaseSQL.js ===== : Conectado ao PostgreSQL | Admin Client"
    );

    // Verificar se o banco de dados já existe
    const res = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1;`,
      [sqlDbName]
    );

    if (res.rowCount === 0) {
      // Criar o banco de dados
      await adminClient.query(`CREATE DATABASE ${sqlDbName};`);
      console.log(
        `\n===== CreateDatabaseSQL.js ===== : Banco de dados "${sqlDbName}" criado com sucesso.`
      );
    } else {
      console.log(
        `\n===== CreateDatabaseSQL.js ===== : Banco de dados "${sqlDbName}" já existe.`
      );
    }

    // Confirmar se o banco de dados foi criado
    const dbList = await adminClient.query("SELECT datname FROM pg_database;");
    const dbExists = dbList.rows.some((db) => db.datname === sqlDbName);

    if (dbExists) {
      console.log(
        `\n===== CreateDatabaseSQL.js ===== :  Banco de dados "${sqlDbName}" está presente na lista de bancos de dados.`
      );
    } else {
      console.log(
        `\n===== CreateDatabaseSQL.js ===== :  Banco de dados "${sqlDbName}" NÃO foi encontrado na lista de bancos de dados.`
      );
    }
  } catch (err) {
    console.error(
      "\n===== CreateDatabaseSQL.js ===== :  Erro ao criar banco de dados:",
      err
    );
  } finally {
    await adminClient.end();
    console.log(
      "\n===== CreateDatabaseSQL.js ===== :  Desconectado do PostgreSQL | Admin Client"
    );
  }
};
