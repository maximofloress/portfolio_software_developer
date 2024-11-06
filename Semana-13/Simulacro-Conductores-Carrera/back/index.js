import express from "express";
import conductoresRouter from "./src/routes/conductores.routes.js";
import clasificacionesRouter from "./src/routes/clasificaciones.routes.js";

import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/conductores', conductoresRouter.router)
app.use('/api/clasificaciones', clasificacionesRouter.router)

app.get('/', (req, res) => {   
    res.send("Servidor de la carrera de conductores");
});

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});
