const express = require('express');
const routes = express.Router();

const { show, list, get } = require('../controllers/exercise.controller')

routes.get("/list", list)
routes.get("/create", show)
routes.get("/edit/:id", get)

module.exports = routes;

