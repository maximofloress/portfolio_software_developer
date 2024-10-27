const models = require('../base-orm/sequelize-init');
const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

// GET /categorias
router.get('/categorias', async (req, res) => {
    // El objeto where en caso de que no se envíen filtros debe ser vacío    
    let where = {};
    // En caso de que se envíe el filtro nombre, se agrega al objeto where
    if (req.query.descripcion != undefined && req.query.descripcion !== "") {
      where.descripcion = {
        [Op.like]: "%" + req.query.descripcion + "%",
      };
    }
    try {
        const categorias = await models.Categoria.findAll({ where });
        res.json(categorias);
    } catch (error) {
        res.status(400).send('Error al obtener las categorias');
    }
});


// GET /categorias/:id
router.get('/categorias/:id', async (req, res) => {
    const categoria = await models.Categoria.findByPk(req.params.id);
    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).send('Categoria no encontrada');
    }
});

// POST /categorias
router.post('/categorias', async (req, res) => {
    try {
        const categoria = await models.Categoria.create(req.body);
        res.json(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear la categoria');
    }
});

// PUT /categoria/:id
router.put('/categorias/:id', async (req, res) => {
    try {
        await models.Categoria.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(204).send('Categoria actualizada');
    } catch (error) {
        res.status(500).send('Error al actualizar la categoria');
    }
});

// DELETE /categoria/:id
router.delete('/categorias/:id', async (req, res) => {
    try {
        // Verificar si la categoria tiene editoriales asociadas
        const dependencias = await models.Editorial.findAll({ where: { id_categoria: req.params.id } });
        if (dependencias.length > 0) {
            res.status(500).send('No se puede borrar la categoria porque tiene editoriales asociadas');
            return;
        }
        let filasBorradas = await models.Categoria.destroy({
            where: { id: req.params.id },
        });
        if (filasBorradas == 1) res.sendStatus(200);
        else res.sendStatus(404);
    } catch (error) {
        res.status(400).send('Error al eliminar la categoria');
    }
});


module.exports = router;