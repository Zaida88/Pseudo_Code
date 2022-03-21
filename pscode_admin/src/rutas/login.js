const express = require('express');

const rutas = express.Router()

const{ mostrar, login, mostrarRegistro, registro, cerrar } = require("../controladores/login_controlador")

rutas.get("/login", mostrar)

rutas.get("/registro", mostrarRegistro)

rutas.get("/CerrarSecion", cerrar)

rutas.post("/registro", registro)

rutas.post("/login",login)

module.exports = rutas