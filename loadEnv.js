// loadEnv.js
import { config } from 'dotenv';

// Carregar variáveis do arquivo .env
config();

export const port = process.env.API_PORT || 3000;

export const noSqlString = process.env.NOSQL_URL_WEB;

export const sqlString = process.env.SQL_URL_WEB;
export const sqlDbName = process.env.SQL_DB;
