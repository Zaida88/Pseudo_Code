const express = require('express');

const rutas = express.Router()

const{ mostrar, verificar } = require("../controladores/index_controlador")

rutas.get("/", mostrar)

rutas.post("/",verificar)

module.exports = rutas