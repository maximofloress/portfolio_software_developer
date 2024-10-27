const models = require('../base-orm/sequelize-init');
const express = require('express');
const { Op } = require("sequelize");

const router = express.Router();

// GET /pedidos
router.get('/pedidos', async (req, res) => {
    let where = {};
    if (req.query.id_libro != undefined && req.query.id_libro !== "") {
        where.id_libro = {
            [Op.like]: "%" + req.query.id_libro + "%"
        };
    }

    try {
        const pedidos = await models.Pedido.findAll({ where });
        return res.json(pedidos);
    } catch (error) {
        res.status(400).send('Error al obtener los pedidos');
    }
});

// GET /pedidos/:id
router.get('/pedidos/:id', async (req, res) => {
    try {
        const pedido = await models.Pedido.findByPk(req.params.id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).send('Pedido no encontrado');
        }
    } catch (error) {
        res.status(400).send('Error al obtener el pedido');
    }
});

// POST /pedidos
router.post('/pedidos', async (req, res) => {
    try {
        const pedido = await models.Pedido.create(req.body);
        res.json(pedido);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error al crear el pedido');
    }
});

// PUT /pedidos/:id
router.put('/pedidos/:id', async (req, res) => {
    try {
        await models.Pedido.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send('Error al actualizar el pedido');
    }
});

// DELETE /pedidos/:id
router.delete('/pedidos/:id', async (req, res) => {
    try {
        await models.Pedido.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('Pedido eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el pedido');
    }
});

module.exports = router;