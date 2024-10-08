const express = require('express');
const router = express.Router();

let arr_ArticulosFamiliasMock = [
  {
    "IdArticuloFamilia": 1,
    "Nombre": "Accesorios"
  },
  {
    "IdArticuloFamilia": 2,
    "Nombre": "Audio"
  },
  {
    "IdArticuloFamilia": 3,
    "Nombre": "Celulares"
  },
  {
    "IdArticuloFamilia": 4,
    "Nombre": "Cuidado Personal"
  },
  {
    "IdArticuloFamilia": 5,
    "Nombre": "Dvd"
  },
  {
    "IdArticuloFamilia": 6,
    "Nombre": "Fotografia"
  },
  {
    "IdArticuloFamilia": 7,
    "Nombre": "Frio-Calor"
  },
  {
    "IdArticuloFamilia": 8,
    "Nombre": "Gps"
  },
  {
    "IdArticuloFamilia": 9,
    "Nombre": "Informatica"
  },
  {
    "IdArticuloFamilia": 10,
    "Nombre": "Led - Lcd"
  }
];

// definimos la peticion get para el ROUTER de articulosfamiliasmock
router.get('/api/articulosfamiliasmock', async function (req, res) {
  let nombre = req.query.Nombre;
  if (nombre) {
    let articuloFamilia = arr_ArticulosFamiliasMock.find(a => a.Nombre == nombre);
    if (articuloFamilia) {
      res.json(articuloFamilia);
    } else {
      res.status(404).send('Articulo Familia no encontrado');
    }
  } else {
    res.json(arr_ArticulosFamiliasMock);
  }

});

router.get('/api/articulosfamiliasmock/:id', async function (req, res) {
   let articuloFamilia = arr_ArticulosFamiliasMock.find(a => a.IdArticuloFamilia == req.params.id);
   if (articuloFamilia) {
     res.json(articuloFamilia);
   } else {
     res.status(404).send('Articulo Familia no encontrado');
   }
});

router.post('/api/articulosfamiliasmock', async function (req, res) {
    const { Nombre } = req.body;
    let articuloFamilia = {
      IdArticuloFamilia: arr_ArticulosFamiliasMock.length + 1,  
      Nombre,
        
    }
    arr_ArticulosFamiliasMock.push(articuloFamilia);
    res.status(201).json(articuloFamilia);
});

router.put('/api/articulosfamiliasmock/:id', async function (req, res) {
  let articuloFamilia = arr_ArticulosFamiliasMock.find(a => a.IdArticuloFamilia == req.params.id);
  if (articuloFamilia) {
    const { Nombre } = req.body;
    articuloFamilia.Nombre = Nombre;
    res.status(201).json({ articuloFamilia, message: 'Articulo Familia actualizado' }); ;
  } else {
    res.status(404).send('Articulo Familia no encontrado');
  }
});

router.delete('/api/articulosfamiliasmock/:id', (req, res) => {
  let articuloFamilia = arr_ArticulosFamiliasMock.find(
    (x) => x.IdArticuloFamilia == req.params.id
  );

  if (articuloFamilia) {
    arr_ArticulosFamiliasMock = arr_ArticulosFamiliasMock.filter(
      (x) => x.IdArticuloFamilia != req.params.id
    );
    res.json({ message: 'articulofamilia eliminado' });
  } else {
    res.status(404).json({ message: 'articulofamilia no encontrado' })
  }
});

module.exports = router;
