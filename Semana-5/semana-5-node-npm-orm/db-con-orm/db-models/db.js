const { Sequelize } = require("sequelize");
const { clasificacionAtributos, clasificacionOptions } = require("./clasificacion");
const { peliculasAtributos, peliculasOptions } = require("./peliculas");


const sequelize = new Sequelize({
    dialect: 'sqlite',
    database: '../tabla.db'
})

// en data guardamos la configuracion una vez creada la conexion a base de datos
const initDB = async () => {
    const seq = await sequelize.sync()
    seq.define('clasificaciones', clasificacionAtributos, clasificacionOptions)
    seq.define('peliculas', peliculasAtributos, peliculasOptions)
    // belongTo("modelo al cual referencia la FK" , "la columna a la que hace referencia la FK dentro del modelo referenciado")
    seq.models.peliculas.belongsTo(seq.models.clasificaciones,{foreignKey: 'IdClasificacion'})
}

module.exports = {
    sequelize,
    initDB
}