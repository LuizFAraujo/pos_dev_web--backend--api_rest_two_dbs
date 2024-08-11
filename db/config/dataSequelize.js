import { Sequelize } from "sequelize";
import { sqlString } from "../../loadEnv.js";

const sequelize = new Sequelize(sqlString, {
  dialect: "postgres",
  logging: false,
});

export default sequelize;
