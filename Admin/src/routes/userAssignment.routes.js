const express = require('express');
const routes = express.Router();

const { show, send, list, get, edit  } = require('../controllers/userAssignment.controller')

routes.get("/userAssignmentAdd", show)
routes.get("/userAssignmentEdit/:id", get)
routes.get("/userAssignmentList/:id", list)
routes.post("/add", send)
routes.post("/actualize/:id", edit)

module.exports = routes; 