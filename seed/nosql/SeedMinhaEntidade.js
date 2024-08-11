import mongoose from "mongoose";
import MinhaEntidade from "../../models/nosql/MinhaEntidade.js";
import { noSqlString } from "../../loadEnv.js";

export const SeedDataMinhaEntidade = async () => {
  try {
    await mongoose.connect(noSqlString); // Aguarde a conexão
    console.log("===== SeedMinhaEntidade.js ===== :  Conectado ao MongoDB");

    // Dados de exemplo para inserir
    const dados = [
      { campo1: "Valor1", campo2: 1 },
      { campo1: "Valor2", campo2: 2 },
      { campo1: "Valor3", campo2: 3 },
      { campo1: "Valor4", campo2: 4 },
      { campo1: "Valor5", campo2: 5 },
    ];

    // Limpa a coleção antes de inserir
    await MinhaEntidade.deleteMany();

    // Insere os dados
    await MinhaEntidade.insertMany(dados);

    // Verifica se os dados foram realmente inseridos
    const dadosInseridos = await MinhaEntidade.find();
    console.log(
      "\n===== SeedMinhaEntidade.js ===== :  ###########################################################"
    );
    console.log("Dados inseridos com sucesso");
    console.log("Dados no banco de dados:");
    console.log(dadosInseridos);
    console.log(
      "===== SeedMinhaEntidade.js ===== :  ###########################################################\n"
    );
  } catch (err) {
    console.error(
      "\n===== SeedMinhaEntidade.js ===== :  Erro ao popular o banco de dados:",
      err);
  } finally {
    await mongoose.disconnect(); // Aguarde a desconexão
    console.log(
      "\n===== SeedMinhaEntidade.js ===== :  Desconectado do MongoDB"
    );
  }
};
