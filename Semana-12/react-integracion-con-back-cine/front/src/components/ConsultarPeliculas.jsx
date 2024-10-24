import { useEffect, useState } from "react";
import FiltrosPeliculas from "./shared/FiltrosPeliculas";
import TablaPeliculas from "./shared/TablaPeliculas";
import peliculasService from "../services/peliculas.service";

export default function ConsultarPelicula() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchPeliculas = async () => {
            const peliculas = await peliculasService.getPeliculas();
            setRows(peliculas);
        };
        fetchPeliculas();
    }, 
    [])

    const onConsultar = async (titulo) => {
        const peliculas = await peliculasService.getPeliculas(titulo)
        setRows(peliculas);
    }

    return (
        <>
            <div className="row">
                <br></br>
                <div className="col-12">
                    <FiltrosPeliculas
                        onConsultarPeliculas={onConsultar}>
                    </FiltrosPeliculas>
                </div>
                <br></br>
                <br></br>
                <div className="col-12">
                    <TablaPeliculas items={rows}>
                    </TablaPeliculas>
                </div>
            </div>
        </>
    )
}