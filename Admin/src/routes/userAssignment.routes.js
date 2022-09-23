const express = require('express');
const routes = express.Router();

const { show, list, get } = require('../controllers/userAssignment.controller')

routes.get("/userAssignment/list", list)
routes.get("/userAssignment/create", show)
routes.get("/userAssignment/edit/:id", get)

module.exports = routes; 