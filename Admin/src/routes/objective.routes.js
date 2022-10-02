const express = require('express');

const routes = express.Router()


const { showO, bringO, listO, sendO, updateO } = require('../controllers/objective.controller');

const { isLoggedIn } = require('../lib/auth')

routes.get("/createObjective/", isLoggedIn, showO)

routes.get("/update/:id", isLoggedIn, bringO)

routes.get("/list/:id", isLoggedIn, listO)

routes.post("/create/", isLoggedIn, sendO)

routes.post("/update/:id", isLoggedIn, updateO)

module.exports = routes