import { DataTypes } from 'sequelize';
import sequelize from '../../db/config/dataSequelize.js';

const Cliente = sequelize.define(
  'Cliente',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    dataCadastro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ultimaAtualizacao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'clientes', // Nome da tabela no PostgreSQL
    timestamps: false // Defina como true se tiver colunas de timestamps
  }
);

export default Cliente;
