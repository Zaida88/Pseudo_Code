const express = require('express');
const routes = express.Router();

const { showUser, list, get, createUser, createAssignment, edit, showAssignment } = require('../controllers/userAssignment.controller')

routes.get("/userAssignment/list", list)
routes.post("/userAssignment/createUser", createUser)
routes.get("/userAssignment/createUser", showUser)
routes.post("/userAssignment/createAssignment", createAssignment)
routes.get("/userAssignment/createAssignment", showAssignment)
routes.get("/userAssignment/edit/:id", get) 
routes.get("/userAssignment/update/:id", edit) 

module.exports = routes; 