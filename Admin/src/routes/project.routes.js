const express = require('express');

const routes = express.Router()


const { show, send, list, bring, update } = require('../controllers/project.controller');
const { showO, bringO, listO, sendO, updateO } = require('../controllers/objective.controller');

const { isLoggedIn } = require('../lib/auth')

routes.get("/create/", isLoggedIn, show, showO)

routes.get("/update/:id", isLoggedIn, bring, bringO)

routes.get("/list/:id", isLoggedIn, list, listO)

routes.post("/create/", isLoggedIn, send, sendO)

routes.post("/update/:id", isLoggedIn, update, updateO)

module.exports = routes