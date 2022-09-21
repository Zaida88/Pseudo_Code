const express = require('express');
const routes = express.Router();

const { show, list, get } = require('../controllers/exercise.controller')

routes.get("/create", show)
routes.get("/edit/:id", get)
routes.get("/list", list)

module.exports = routes;

