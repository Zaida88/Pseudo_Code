const express = require('express');

const rutas = express.Router()

const{ mostrar } = require("../controladores/index_controlador")

rutas.get("/", mostrar)

module.exports = rutas