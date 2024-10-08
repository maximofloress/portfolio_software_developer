const express = require('express');
const articulosfamiliasmockRouter = require('./routes/articulosfamiliasmock');

const app = express();
app.use(express.json());
app.use(articulosfamiliasmockRouter);

app.get('/', (req, res) => {
    res.send('Backend inicial dds-backend');
});

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



