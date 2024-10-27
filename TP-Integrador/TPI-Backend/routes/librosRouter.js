const models = require('../base-orm/sequelize-init');
const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

// GET /libros

router.get('/libros', async (req, res) => {    
     // El objeto where en caso de que no se envíen filtros debe ser vacío
     let where = {};
     // En caso de que se envíe el filtro nombre, se agrega al objeto where
     if (req.query.titulo != undefined && req.query.titulo !== "") {
       where.titulo = {
         [Op.like]: "%" + req.query.titulo + "%",
       };
     }

    try {
        const libros = await models.Libro.findAll({ where });
        return res.json(libros);
    } catch (error) {
        res.status(500).send('Error al obtener los libros');
    }
});

// GET /libros /:id

router.get('/libros/:id', async (req, res) => {
    try {
        const libro = await models.Libro.findByPk(req.params.id);
        if (libro) {
            res.json(libro);
        } else {
            res.status(404).send('Libro no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener el libro');
    }
});

// POST /libros

router.post('/libros', async (req, res) => {
    try {
        const libro = await models.Libro.create(req.body);
        res.json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el libro');
    }
});

// PUT /libros /:id

router.put('/libros/:id', async (req, res) => {
    try {
        await models.Libro.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(204).send("Libro actualizado");
    } catch (error) {
        res.status(500).send('Error al actualizar el libro');
    }
});

// DELETE /libros /:id
router.delete('/libros/:id', async (req, res) => {
    const dependencias = await models.Autor.findAll({ where: { id: req.params.id } });
    if (dependencias.length > 0) {
        res.status(400).send('No se puede borrar el libro porque tiene Autores asociados');
        return;
    }
    let filasBorradas = await models.Libro.destroy({
        where: { id: req.params.id },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
});

module.exports = router;
