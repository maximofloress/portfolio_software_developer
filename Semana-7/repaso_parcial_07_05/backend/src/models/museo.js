// inicializo la estructura de la tabla libros en la BD
const { DataTypes } = require('sequelize');

const museoAtributos = {
    id:{
        type: DataTypes.INTEGER,
        autoIncremental: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    año_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const opciones = {
    timestamps: false,
    tableName: 'MUSEO'
}

// exportamos
// export const museoModel = { 
//     museoAtributos,
//     opciones
// }