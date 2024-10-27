const models = require('../base-orm/sequelize-init');
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

// GET /autores

router.get('/autores', async (req, res) => {
    let where = {};
    if (req.query.nombre != undefined && req.query.nombre !== "") {
        where.nombre = {
            [Op.like]: "%" + req.query.nombre + "%"
        };
    }

    try {
        const autores = await models.Autor.findAll({ where });
        return res.json(autores);
    } catch (error) {
        res.status(400).send('Error al obtener los autores');
    }
});

// GET /autores /:id
router.get('/autores/:id', async (req, res) => {
    const autores = await models.Autor.findByPk(req.params.id);
    if (autores) {
        res.json(autores);
    } else {
        res.status(404).send('Autor no encontrado');
    }
});

// POST /autores

router.post('/autores', async (req, res) => {
    try {
        const autores = await models.Autor.create(req.body);
        res.json(autores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear los autores');
    }
});

// PUT /autores /:id

router.put('/autores/:id', async (req, res) => {
    try {
        await models.Autor.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(204).send("Autor actualizado");
    } catch (error) {
        res.status(500).send('Error al actualizar los autores');
    }
});

// DELETE /autores /:id

router.delete('/autores/:id', async (req, res) => {
    try {
        await models.Autor.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('Autor eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el autor');
    }
});


module.exports = router;
