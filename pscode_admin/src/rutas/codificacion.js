const express = require('express');

const rutas = express.Router()

const{ mostrar, traer, listar, enviar, actualizar} = require("../controladores/codificacion_controlador")

rutas.get("/agregar/:id", mostrar)

rutas.get("/editar/:id", traer)

rutas.get("/listar/:id", listar)

rutas.post("/agregar/:id", enviar)

rutas.post("/editar/:id", actualizar)

module.exports = rutas