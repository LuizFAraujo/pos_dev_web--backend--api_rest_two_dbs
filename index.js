import express from 'express';
import ConectaDbNoSQL from './db/ConectaDbNoSQL.js';
import ConectaDbSQL from './db/ConectaDbSQL.js';
import { port } from './loadEnv.js';
import UsuarioRoutes from './routes/nosql/UsuarioRoutes.js';
import ProdutoRoutes from './routes/nosql/ProdutoRoutes.js';
import ClienteRoutes from './routes/sql/ClienteRoutes.js';
import CategoriaRoutes from './routes/sql/CategoriaRoutes.js';

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
app.use('/no_sql/usuarios', UsuarioRoutes);
app.use('/no_sql/produtos', ProdutoRoutes);

app.use('/sql/clientes', ClienteRoutes);
app.use('/sql/categorias', CategoriaRoutes);

app.listen(port, () => {
  console.log(`API rodando. Acessar: http://localhost:${port}`);
});

// Desconectar ao encerrar o processo
process.on('SIGINT', async () => {
  await ConectaDbNoSQL.disconnect();
  await ConectaDbSQL.disconnect();
  process.exit(0);
});
