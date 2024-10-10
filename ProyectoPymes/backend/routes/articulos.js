const express = require("express");
const { Op, ValidationError } = require("sequelize"); 
const router = express.Router();
const db = require("../base-orm/sequelize-init");
