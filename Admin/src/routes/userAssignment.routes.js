const express = require('express');
const routes = express.Router();

const { show, list, get, create } = require('../controllers/userAssignment.controller')

routes.get("/userAssignment/list", list)
routes.post("/userAssignment/create/:id", create)
routes.get("/userAssignment/create", show)
routes.get("/userAssignment/edit/:id", get)

module.exports = routes; 