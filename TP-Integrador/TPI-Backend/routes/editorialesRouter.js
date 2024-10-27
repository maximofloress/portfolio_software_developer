const models = require('../base-orm/sequelize-init.js');
const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

// GET /editoriales
router.get('/editoriales', async (req, res) => {   
    let where = {};
    // En caso de que se envíe el filtro nombre, se agrega al objeto where
    if (req.query.nombre != undefined && req.query.nombre !== "") {
      where.Nombre = {
        [Op.like]: "%" + req.query.nombre + "%",
      };
    }
 
    try {
        const editoriales = await models.Editorial.findAll({ where });
        res.json(editoriales);
    } catch (error) {
        res.status(400).send('Error al obtener las editoriales');
    }
});

// GET /editoriales/:id
router.get('/editoriales/:id', async (req, res) => {
    try {
        const editorial = await models.Editorial.findByPk(req.params.id);
        if (editorial) {
            res.json(editorial);
        } else {
            res.status(404).send('Editorial no encontrada');
        }
    } catch (error) {
        res.status(400).send('Error al obtener la editorial');
    }
});

// POST /editoriales
router.post('/editoriales', async (req, res) => {
    try {
        const editorial = await models.Editorial.create(req.body);
        res.json(editorial);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error al crear la editorial');
    }
});

// PUT /editoriales/:id
router.put('/editoriales/:id', async (req, res) => {
    try {
        await models.Editorial.update(req.body, {
            where: {
                id: req.params.id //SI DA ERROR REVISAR POR ACA 
            }
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send('Error al actualizar la editorial');
    }
});

// DELETE /editoriales/:id
router.delete('/editoriales/:id', async (req, res) => {
    try {
        await models.Editorial.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('Editorial eliminada');
    } catch (error) {
        res.status(500).send('Error al eliminar la editorial');
    }
});

module.exports = router;