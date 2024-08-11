import EntidadeTesteSql from "../../models/sql/EntidadeTesteSql.js";

export const SeedEntidadeTesteSql = async () => {
  try {
    const dados = [
      { campo1: "Valor1", campo2: 10 },
      { campo1: "Valor2", campo2: 20 },
      { campo1: "Valor3", campo2: 30 },
      { campo1: "Valor4", campo2: 40 },
      { campo1: "Valor5", campo2: 50 },
    ];

    console.log(
      "\n===== SeedEntidadeTesteSql.js ===== :  Limpando a tabela..."
    );
    await EntidadeTesteSql.destroy({ where: {} });

    console.log("\n===== SeedEntidadeTesteSql.js ===== :  Inserindo dados...");
    await EntidadeTesteSql.bulkCreate(dados);

    console.log(
      "\n===== SeedEntidadeTesteSql.js ===== :  Dados inseridos. Verificando..."
    );
    const insertedData = await EntidadeTesteSql.findAll();
    console.log(
      "\n===== SeedEntidadeTesteSql.js ===== :  Dados inseridos com sucesso:",
      insertedData.map((d) => d.toJSON())
    );
  } catch (error) {
    console.error(
      "\n===== SeedEntidadeTesteSql.js ===== :  Erro ao popular o banco de dados:",
      error
    );
  }
};
