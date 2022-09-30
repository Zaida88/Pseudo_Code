const express = require('express');

const routes = express.Router()


const { showO, bringO, listO, sendO, updateO } = require('../controllers/objective.controller');

routes.get("/createObjetive/", showO)

routes.get("/update/:id", bringO)

routes.get("/list/:id", listO)

routes.post("/create/", sendO)

routes.post("/update/:id", updateO)

module.exports = routes