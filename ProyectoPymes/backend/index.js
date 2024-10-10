const express = require('express');
const articulosfamiliasmockRouter = require('./routes/articulosfamiliasmock');
const articulosfamiliasRouter = require("./routes/articulosfamilias");

const app = express();
require("./base-orm/sqlite-init");
app.use(express.json());
app.use(articulosfamiliasmockRouter);
app.use(articulosfamiliasRouter);

app.get('/', (req, res) => {
    res.send('Backend inicial dds-backend');
});

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



