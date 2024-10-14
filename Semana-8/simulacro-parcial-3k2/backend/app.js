import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./services/starbucksDirectoryService.js";

import dbInit from "./data/db-init.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/status", (req, res) => {
    res.json({ respuesta: "API iniciada y escuchando..." });
});

(async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}());
