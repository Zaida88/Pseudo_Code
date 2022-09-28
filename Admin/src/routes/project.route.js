const express = require('express');

const routes = express.Router()


const { show, send, list, bring, update } = require('../controllers/project.controller');
const { showO, bringO, listO, sendO, updateO } = require('../controllers/objective.controller');

routes.get("/create/", show, showO)

routes.get("/update/:id", bring, bringO)

routes.get("/list/:id", list, listO)

routes.post("/create/", send, sendO)

routes.post("/update/:id", update, updateO)

module.exports = routes