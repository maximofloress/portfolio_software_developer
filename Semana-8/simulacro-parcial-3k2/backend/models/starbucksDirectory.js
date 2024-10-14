import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const starbucksDirectory = sequelize.define("STARBUCKS_DIRECTORY", {
    STORE_NUMBER: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    STORE_NAME: {
        type: DataTypes.TEXT
    },
    STREET_ADDRESS: {
        type: DataTypes.TEXT
    },
    CITY: {
        type: DataTypes.TEXT
    },
    PROVINCE: {
        type: DataTypes.TEXT
    },
    COUNTRY: {
        type: DataTypes.TEXT
    },
    POSTCODE: {
        type: DataTypes.TEXT
    },
    LONGITUDE: {
        type: DataTypes.REAL
    },
    LATITUDE: {
        type: DataTypes.REAL
    },
}, {
    tableName: "STARBUCKS_DIRECTORY",
    timestamps: false
});

export default starbucksDirectory;
