// console.log("=========================================================== AQUI =============");
import express from "express";
import ConectaDbNoSQL from "./db/ConectaDbNoSQL.js";
import ConectaDbSQL from "./db/ConectaDbSQL.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.API_PORT || 3000;

// Conectar aos bancos de dados
ConectaDbNoSQL.connect();
// ConectaDbSQL.connect();

// Rota principal
app.get("/", (req, res) => {
  res.send("<h1>A API está rodando</h1>");
});

// Rota para verificar a conexão com MongoDB
app.get("/nosql", async (req, res) => {
  try {
    await ConectaDbNoSQL.connect(); // Tenta realizar uma operação simples no MongoDB
    res.send("<h1>API conectada ao MongoDB</h1>");
  } catch (err) {
    res.status(500).send("Erro ao conectar ao MongoDB");
  }
});

// Rota para verificar a conexão com PostgreSQL
app.get("/sql", async (req, res) => {
  try {
    await ConectaDbSQL.connect(); // Tenta realizar uma operação simples no PostgreSQL
    res.send("<h1>API conectada ao PostgreSQL");
  } catch (err) {
    res.status(500).send("Erro ao conectar ao PostgreSQL");
  }
});

app.listen(port, () => {
  console.log(`API rodando. Acessar: http://localhost:${port}`);
});

// Desconectar ao encerrar o processo
process.on("SIGINT", async () => {
  await ConectaDbNoSQL.disconnect();
  await ConectaDbSQL.disconnect();
  process.exit(0);
});
