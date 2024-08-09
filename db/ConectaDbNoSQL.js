import mongoose from "mongoose";
import "../loadEnv.js";

const mongoURI = process.env.NOSQL_URL_WEB;

const connect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Desconectado do MongoDB");
  } catch (err) {
    console.error("Erro ao desconectar do MongoDB:", err);
  }
};

export default { connect, disconnect };
