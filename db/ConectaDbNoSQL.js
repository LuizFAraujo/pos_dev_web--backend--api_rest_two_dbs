import mongoose from "mongoose";
import { noSqlString } from "../loadEnv.js";

// export const mongoURI = process.env.NOSQL_URL_WEB;

const connect = async () => {
  try {
    await mongoose.connect(noSqlString);
    console.log("\n===== ConectaDbNoSQL.js ===== :  Conectado ao MongoDB\n");
  } catch (err) {
    console.error(
      "\n===== ConectaDbNoSQL.js ===== :  Erro ao conectar ao MongoDB:",
      err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("\n===== ConectaDbNoSQL.js ===== :  Desconectado do MongoDB");
  } catch (err) {
    console.error(
      "\n===== ConectaDbNoSQL.js ===== :  Erro ao desconectar do MongoDB:",
      err );
  }
};

export default { connect, disconnect };
