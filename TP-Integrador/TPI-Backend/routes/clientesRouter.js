const models = require('../base-orm/sequelize-init');
const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

// GET /clientes con filtros
router.get("/clientes", async function (req, res) {
    // El objeto where en caso de que no se envíen filtros debe ser vacío
    let where = {};
    // En caso de que se envíe el filtro nombre, se agrega al objeto where
    if (req.query.nombre != undefined && req.query.nombre !== "") {
      where.Nombre = {
        [Op.like]: "%" + req.query.nombre + "%",
      };
    }

    // Se realiza la consulta con los filtros
    try {
        const clientes = await models.Cliente.findAll({ where});
        return res.json(clientes);
    } catch (error) {
        res.status(400).send('Error al obtener los clientes');
    }
});

// GET /clientes/:id
router.get('/clientes/:id', async (req, res) => {
    const cliente = await models.Cliente.findByPk(req.params.id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

// POST /clientes cambios en el status de resopuesta
router.post('/clientes', async (req, res) => {
    try {
        const cliente = await models.Cliente.create(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error al crear el cliente');
    }
});

// PUT /clientes/:id
router.put('/clientes/:id', async (req, res) => {
    try {
        await models.Cliente.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(400).send('Error al actualizar el cliente');
    }
});

// DELETE /clientes/:id
router.delete('/clientes/:id', async (req, res) => {
    const dependencias = await models.Pedido.findAll({ where: { id_cliente: req.params.id } });
    if (dependencias.length > 0) {
        res.status(400).send('No se puede borrar el cliente porque tiene pedidos asociados');
        return;
    }
    let filasBorradas = await models.Cliente.destroy({
        where: { id: req.params.id },
      });
      if (filasBorradas == 1) res.sendStatus(200);
      else res.sendStatus(404);
});

module.exports = router;