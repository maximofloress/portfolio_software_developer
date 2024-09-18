import { Sequelize } from "sequelize";
import { clasificacionesModel } from "./clasificacion.js";
import { peliculasModel } from "./peliculas.js";

// para mandar la direccion al archivo de la base de datos es "storage", "database" define el nombre no la direccion
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './tabla'
})

// en data guardamos la configuracion una vez creada la conexion a base de datos
export const initDB = async () => {
    sequelize.define('clasificaciones', clasificacionesModel.clasificacionAtributos, clasificacionesModel.clasificacionOptions)
    sequelize.define('peliculas', peliculasModel.atributos, peliculasModel.opciones)
    // belongTo("modelo al cual referencia la FK" , "la columna a la que hace referencia la FK dentro del modelo referenciado")
    sequelize.models.peliculas.belongsTo(sequelize.models.clasificaciones,{foreignKey: 'IdClasificacion'})
    await sequelize.sync()
    console.log()
}


