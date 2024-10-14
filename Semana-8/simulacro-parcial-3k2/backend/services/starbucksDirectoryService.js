import express from "express";
import { Op } from "sequelize";
import starbucksDirectory from "../models/starbucksDirectory.js";

const router = express.Router();

// Ejemplo de datos de locales

router.get("/locales/test", async (req, res) => {
    try {
        const locales = await starbucksDirectory.findAll();
        res.json(locales);
    }
    catch (error) {
        console.error("Error al obtener los locales:", error);
        res.status(500).json({ error: "Error al obtener los locales" });
    }
});

// etorna todos los locales de la tabla que corresponden a argentina
router.get("/locales", async (req, res) => {
    try {
        const localesArg = await starbucksDirectory.findAll({
            where: {
                COUNTRY: { [Op.like]: "AR" }
            }
        });
        res.json(localesArg);
    }
    catch (err) {
        res.status(500).send({ message: "Error al recuperar los locales" });
    }
});

// que devuelve todos los locales de argentina que no pertenecen al AMBA (PROVINCE != C y de B).
router.get("/locales/interior", async (req, res) => {
    try {
        const localesArg = await starbucksDirectory.findAll({
            where: {
                COUNTRY: { [Op.like]: "AR" },
                PROVINCE: { [Op.and]: [
                    { [Op.notLike]: "C" },
                    { [Op.notLike]: "B" }
                ] },
            }
        });
        res.json(localesArg);
    }
    catch (err) {
        res.status(500).send({ message: "Error al recuperar los locales" });
    }
});

export default router;
