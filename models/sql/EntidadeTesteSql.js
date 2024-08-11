// models/EntidadeTesteSql.js
import { DataTypes } from "sequelize";
import sequelize from "../../db/config/dataSequelize.js";

const EntidadeTesteSql = sequelize.define("EntidadeTesteSql", {
  campo1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  campo2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "entidade_teste_sql", // Nome da tabela no PostgreSQL
  timestamps: false, // Defina como true se tiver colunas de timestamps
});

export default EntidadeTesteSql;
