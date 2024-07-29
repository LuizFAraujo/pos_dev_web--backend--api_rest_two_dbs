import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const app = express();
app.use(express.json()); // Configurar o middleware para processar JSON

// Rota de exemplo para verificar se a API está funcionando
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Conectar ao banco de dados e iniciar o servidor
pool
  .connect()
  .then(() => {
    console.log("Conectado ao banco de dados PostgreSQL...");

    // Iniciar o servidor na porta 3000
    app.listen(3000, () => {
      console.log("API rodando em: http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados PostgreSQL: ", err);
    process.exit(-1);
  });

// Configurar o evento de erro para o pool de conexões
pool.on("error", (err) => {
  console.error("Erro inesperado: ", err);
  process.exit(-1);
});
