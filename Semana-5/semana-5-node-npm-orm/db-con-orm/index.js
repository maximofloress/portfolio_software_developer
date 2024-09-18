const { initDB, sequelize } = require('./db-models/db')

// el .findAll() por detras esta realizando un SELECT from TABLA *; esto lo realiza el ORM en base al "dialect" que pusimos (sqlite)
// si no especificas attributes el findAll te trae todos los atributos por defecto
async function getAll(){
    const registros = await sequelize.models.peliculas.findAll({
        attributes: [
            'IdPelicula',
            'IdClasificacion',
            'Titulo'
        ]
    })
    console.log(registros)
}
 
// funcion lambda
( async () => {
        await initDB()
        console.log('Base de Datos Inicializada')
        await getAll()
    })()

