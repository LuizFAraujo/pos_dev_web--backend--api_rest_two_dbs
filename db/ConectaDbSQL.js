// import "../loadEnv.js";
import pkg from "pg";
const { Client } = pkg;

const pgClient = new Client({ connectionString: process.env.SQL_URL_WEB });

const connect = async () => {
  try {
    await pgClient.connect();
    console.log("Conectado ao PostgreSQL");
  } catch (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err);
  }
};

const disconnect = async () => {
  try {
    await pgClient.end();
    console.log("Desconectado do PostgreSQL");
  } catch (err) {
    console.error("Erro ao desconectar do PostgreSQL:", err);
  }
};

export default { connect, disconnect };
