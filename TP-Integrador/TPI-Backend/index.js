const express = require('express');
const cors = require('cors');
const clientesRouter = require('./routes/clientesRouter');
const pedidosRouter = require('./routes/pedidosRouter');
const librosRouter = require('./routes/librosRouter')
const autoresRouter = require('./routes/autoresRouter')
const categoriasRouter = require('./routes/categoriasRouter');
const editorialRouter = require('./routes/editorialesRouter');


const app = express();
require('./base-orm/sqlite-init');
app.use(express.json());
// Configuracion de CORS para permitir peticiones desde cualquier origen
app.use(cors({ origin: '*' }));
app.use(clientesRouter);
app.use(pedidosRouter);
app.use(librosRouter);
app.use(autoresRouter);
app.use(categoriasRouter);
app.use(editorialRouter);

app.get('/', (req, res) => {
    res.send('API Backend de librería corriendo...');
});

if (!module.parent) {  
    const port = process.env.PORT || 3000;   
    app.locals.fechaInicio = new Date();
    app.listen(port, () => {
      console.log(`sitio escuchando en el puerto ${port}`);
    });
  }
  
module.exports = app;