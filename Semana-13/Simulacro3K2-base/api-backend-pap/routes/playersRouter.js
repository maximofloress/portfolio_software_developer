const express = require('express');
const router = express.Router();
const { Player } = require('../base-orm/sequelize-init');
const { Op } = require('sequelize');

// GET /players
router.get('/api/players/:filtro', async (req, res) => {
    const filtro = req.params.filtro;
    const players = await Player.findAll({
        where: {
            [Op.or]: [
                { full_name: { [Op.like]: `%${filtro}%` } },
                { email: { [Op.like]: `%${filtro}%` } },
                { nickname: { [Op.like]: `%${filtro}%` } }
            ]
        }
    });
    res.json(players);
});

module.exports = router;