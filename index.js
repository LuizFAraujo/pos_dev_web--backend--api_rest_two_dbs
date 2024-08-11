import express from 'express';
import ConectaDbNoSQL from './db/ConectaDbNoSQL.js';
import ConectaDbSQL from './db/ConectaDbSQL.js';
import { port } from './loadEnv.js';
import MinhaEntidadeRoutes from './routes/nosql/MinhaEntidadeRoutes.js';
import EntidadeTesteSqlRoutes from './routes/sql/EntidadeTesteSqlRoutes.js';

// Importar na primeira vez, para popular, depois desabilitar
// import "./seed/seedDataInit.js";

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Conectar aos bancos de dados
ConectaDbNoSQL.connect();
ConectaDbSQL.connect();

// Rota principal
app.get('/', (req, res) => {
  res.send('<h1>A API está rodando</h1>');
});

// Usar as rotas
app.use('/no_sql/entidades', MinhaEntidadeRoutes);

app.use('/sql/entidades', EntidadeTesteSqlRoutes);

app.listen(port, () => {
  console.log(`API rodando. Acessar: http://localhost:${port}`);
});

// Desconectar ao encerrar o processo
process.on('SIGINT', async () => {
  await ConectaDbNoSQL.disconnect();
  await ConectaDbSQL.disconnect();
  process.exit(0);
});
