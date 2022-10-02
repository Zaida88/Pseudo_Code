const express = require('express');

const routes = express.Router()


const { show, send, list, bring, update } = require('../controllers/project.controller');


const { isLoggedIn } = require('../lib/auth')

routes.get("/create/", isLoggedIn, show)

routes.get("/update/:id", isLoggedIn, bring)

routes.get("/list/:id", isLoggedIn, list)

routes.post("/create/", isLoggedIn, send)

routes.post("/update/:id", isLoggedIn, update)

module.exports = routes