const express = require('express');
const routes = express.Router();

const { showUser, list, get, createUser, createAssignment, update, showAssignment } = require('../controllers/userAssignment.controller')

routes.get("/list", list)
routes.post("/createUser", createUser)
routes.get("/createUser", showUser)
routes.post("/createAssignment", createAssignment)
routes.get("/createAssignment", showAssignment)
routes.get("/update/:id", get) 
routes.get("/update/:id", update) 

module.exports = routes; 