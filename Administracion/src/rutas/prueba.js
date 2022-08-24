const express = require('express');
const rutas = express.Router()

const { mostrar, enviar, listar1, listar2, listar3, traer, actualizar, mostrarRespuesta, respuestas, mostrarPregunta, preguntas } = require('../controladores/prueba_controlador')

rutas.get('/agregar/:id', mostrar)
rutas.post('/agregar/:id', enviar)
rutas.get('/listar/:id', listar1)
rutas.get('/pregunta/:id', listar2)
rutas.get('/respuestas/:id', mostrarRespuesta)
rutas.post('/respuestas/:id', respuestas)
rutas.get('/lista_completa/:id', listar3)
rutas.get('/editar/:id', traer)
rutas.post('/editar/:id', actualizar)
rutas.get('/pregunta_agregar/:id', mostrarPregunta)
rutas.post('/pregunta_agregar/:id', preguntas)

module.exports = rutas