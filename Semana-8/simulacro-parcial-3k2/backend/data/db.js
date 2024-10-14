// db.js
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const logHabilitado = process.env.LOG;

const sequelize = new Sequelize({
    dialect: "sqlite",
    logging: (logHabilitado === "true") ? console.log : true,
    storage: "./data/bd.sqlite"
});

export default sequelize;
