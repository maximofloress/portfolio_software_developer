// const { DataTypes } = require("sequelize");
import {DataTypes} from "sequelize"

// estas son las columnas que tiene mi tabla clasificacion
const clasificacionAtributos = {
    IdClasificacion:{
        type: DataTypes.INTEGER,
        autoIncremental: true,
        primaryKey: true,
        allowNull: false,
    },
    NombreClasificacion:{
        type: DataTypes.STRING,
        allowNull:false
    }
}

// por defecto sequelize te crea 2 columnas/atributos mas, los cuales no queremos
const clasificacionOptions = {
    timestamps: false,
    tableName: 'CLASIFICACIONES'
}

// exportamos
export const clasificacionesModel = {
    clasificacionAtributos,
    clasificacionOptions
}
