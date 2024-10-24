// import { peliculas } from "../mock-data/peliculas.data";
import axios from "axios"

const urlPelicula = "http://localhost:3000/api/peliculas"

const getPeliculas = (filtros) => {
    if (!filtros)
        return getAll();
    return getByFilters(filtros);
}

const getAll = async () => {
    const peliculas = await axios.get(urlPelicula)
    return peliculas.data
}

const getByFilters = async (filtros) => {
    const resultado = await axios.get(`http://localhost:3000/api/peliculas?titulo=${filtros.titulo}`)
    return resultado.data
}

const post = async (pelicula) => {
    const result = await axios.post(urlPelicula, pelicula)
    return result.data
}

const peliculasService = {
    getPeliculas,
    post
}

export default peliculasService;

