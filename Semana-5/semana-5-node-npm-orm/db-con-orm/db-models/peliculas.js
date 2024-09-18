const { DataTypes } = require("sequelize");

const peliculasAtributos = {
    IdPelicula:{
        type: DataTypes.INTEGER,
        autoIncremental: true,
        primaryKey: true,
        allowNull: false
    },
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Eliminado:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    IdClasificaciion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

const opciones = {
    timestamps: false,
    tableName: 'PELICULAS'
}

const peliculasModel = { 
    atributos: peliculasAtributos,
    opciones: opciones
}

module.exports = peliculasModel
