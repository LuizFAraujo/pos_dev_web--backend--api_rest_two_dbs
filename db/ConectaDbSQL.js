import { Sequelize } from "sequelize";
import { sqlString } from "../loadEnv.js"; // Certifique-se de que o caminho está correto

// Configuração do Sequelize
const sequelize = new Sequelize(sqlString, {
  dialect: "postgres",
  logging: false, // Desativar o log de SQL, pode ser útil para ambientes de produção
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "\n===== ConectaDbSQL.js ===== :  Conectado ao PostgreSQL com Sequelize"
    );
  } catch (err) {
    console.error(
      "\n===== ConectaDbSQL.js ===== :  Erro ao conectar ao PostgreSQL com Sequelize:",
      err
    );
  }
};

const disconnect = async () => {
  try {
    await sequelize.close();
    console.log(
      "\n===== ConectaDbSQL.js ===== :  Desconectado do PostgreSQL com Sequelize"
    );
  } catch (err) {
    console.error(
      "\n===== ConectaDbSQL.js ===== :  Erro ao desconectar do PostgreSQL com Sequelize:",
      err
    );
  }
};

export default { connect, disconnect, sequelize };
