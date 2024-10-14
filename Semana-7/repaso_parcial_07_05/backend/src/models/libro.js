const { Sequelize, DataTypes} = require('sequelize')

// id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", 
// genero: "Realismo mágico", año_publicacion: 1967, editorial: "Sudamericana"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:'
});
const Libro = sequelize.define("Libro", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    } }, 
    {

        timestamps: false,
    }
);

module.exports = {
    sequelize,
    Libro
}