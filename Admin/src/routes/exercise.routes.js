const express = require('express');
const routes = express.Router();

const { list, create, show, detail, remove } = require('../controllers/exercise.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get("/list", list)
routes.post("/create", create)
routes.get("/create", show)
routes.get("/detail/:id", detail)
routes.get('/remove/:id', remove)

module.exports = routes;

