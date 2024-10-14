const { Op } = require('sequelize');
const express = require('express')
const router = express.Router();
const { Libro } = require('../models/libro')

router.get("/api/libros", async (req, res) => {
    try{
        if(req.query.titulo) {
            const libros = await Libro.findAll({
                where: {
                    titulo: { [Op.like]: `${req.query.titulo}%`}
                }
            });
            return res.json(libros);
        }

        const libros = await Libro.findAll();
        res.json(libros);

    } catch (err) {
        res.status(500).send({message: "Error al recuperar los libros"})
    }
})

module.exports = router;