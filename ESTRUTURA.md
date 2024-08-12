# Estrutura de Diretórios do Projeto

```bash
.
├── .dockerignore
├── .env
├── .gitignore
├── docker-compose.yml
├── ESTRUTURA.md
├── index.js
├── LICENSE
├── loadEnv.js
├── package.json
├── README.md
├── node_modules/
├── db/
│   ├── ConectaDbNoSQL.js
│   ├── ConectaDbSQL.js
│   └── config/
│       ├── CreateDatabaseSQL.js
│       ├── dataSequelize.js
│       └── syncDatabase.js
├── DOCKER/
│   ├── Dockerfile-BD_NOSQL
│   ├── Dockerfile-BD_SQL
│   ├── NOSQL/
│   │   └── scripts/
│   │       └── init-mongo.js
│   └── SQL/
│       └── scripts/
│           └── init-postgres.sql
├── routes/
│   ├── nosql/
│   │   ├── ProdutoRoutes.js
│   │   └── UsuarioRoutes.js
│   └── sql/
│       ├── CategoriaRoutes.js
│       └── ClienteRoutes.js
└── seed/
    ├── seedDataInit
    ├── nosql/
    │   ├── SeedProduto.js
    │   ├── SeedUsuario.js
    │   └── data/
    │       ├── ProdutosData.sql
    │       └── UsuariosData.sql
    └── sql/
        ├── SeedCategoria.js
        ├── SeedCliente.js
        └── data/
            ├── CategoriasData.sql
            └── ClientesData.sql
```
