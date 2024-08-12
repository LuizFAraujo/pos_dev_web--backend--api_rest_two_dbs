import { DataTypes } from 'sequelize';
import sequelize from '../../db/config/dataSequelize.js';

const Categoria = sequelize.define(
  'Categoria',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    dataCriacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ultimaModificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    criadoPor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'categorias', // Nome da tabela no PostgreSQL
    timestamps: false // Defina como true se tiver colunas de timestamps
  }
);

export default Categoria;
