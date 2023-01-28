const express = require('express');

const routes = express.Router()


const {show, bring, list, send, update } = require('../controllers/objective.controller');

const { isLoggedIn } = require('../lib/auth')

routes.get("/add/:id", isLoggedIn, show)

routes.get("/edit/:id", isLoggedIn, bring)

routes.get("/list/:id", isLoggedIn, list)

routes.post("/add/:id", isLoggedIn, send)

routes.post("/edit/:id", isLoggedIn, update)

module.exports = routes