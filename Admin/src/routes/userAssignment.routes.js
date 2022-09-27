const express = require('express');
const routes = express.Router();

const { showUser, list, showUpdate, createUser, createAssignment, update, showAssignment,remove } = require('../controllers/userAssignment.controller')

routes.get("/list", list)
routes.post("/createUser", createUser)
routes.get("/createUser", showUser)
routes.post("/createAssignment", createAssignment)
routes.get("/createAssignment", showAssignment)
routes.get("/update/:id", showUpdate) 
routes.post("/update/:id", update) 
routes.get("/remove/:id", remove)

module.exports = routes; 