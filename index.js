import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import { MongoClient } from "mongodb";

const { Pool } = pkg;

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

// Configuração do pool de conexão com o PostgreSQL
const dbSql = new Pool({ connectionString: process.env.SQL_URL });

// Configuração do cliente MongoDB
const dbNoSql = new MongoClient(process.env.NOSQL_URL);

const app = express();
app.use(express.json()); // Configurar o middleware para processar JSON

// Rota de exemplo para verificar se a API está funcionando
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Conectar ao banco de dados PostgreSQL e MongoDB e iniciar o servidor
Promise.all([
  dbSql.connect(),
  dbNoSql.connect()
])
  .then(() => {
    console.log("Conectado ao banco de dados PostgreSQL e MongoDB...");

    // Iniciar o servidor na porta 3000
    app.listen(3000, () => {
      console.log("API rodando em: http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados: ", err);
    process.exit(-1);
  });

// Configurar o evento de erro para o pool de conexões
dbSql.on("error", (err) => {
  console.error("Banco SQL. Erro inesperado: ", err);
  process.exit(-1);
});

// Configurar o evento de erro para o cliente MongoDB
dbNoSql.on("error", (err) => {
  console.error("Banco NoSQL. Erro inesperado: ", err);
  process.exit(-1);
});
