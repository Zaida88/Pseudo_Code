const express = require('express');

const rutas = express.Router()

const{ mostrar, traer, listar, enviar, actualizar, siguiente} = require("../controladores/proyecto_controlador")

rutas.get("/agregar/", mostrar)

rutas.get("/editar/:id", traer)

rutas.get("/listar/:id", listar)

rutas.post('/siguiente/', siguiente)

rutas.post("/agregar/", enviar)

rutas.post("/editar/:id", actualizar)

module.exports = rutas