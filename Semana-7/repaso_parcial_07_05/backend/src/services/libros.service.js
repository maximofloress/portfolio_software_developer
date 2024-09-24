
const getLibros = async () => {
    const resultado = libros
    console.log('resultado', resultado)
    return resultado.map(p => {
        return {
            id: p.Id,
            titulo: p.Titulo,
            director: p.Director,
            genero: p.Genero,
            duracion: p.Duracion,
            idClasificacion: p.IdClasificacion
        }
    })
}

export default libros-service