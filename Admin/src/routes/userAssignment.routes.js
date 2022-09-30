const express = require('express');
const routes = express.Router();

const { showUser, list, showUpdate, createUser, createAssignment, update, showAssignment, remove } = require('../controllers/userAssignment.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get("/list", isLoggedIn, list)
routes.post("/createUser", isLoggedIn, createUser)
routes.get("/createUser", isLoggedIn, showUser)
routes.post("/createAssignment", isLoggedIn, createAssignment)
routes.get("/createAssignment", isLoggedIn, showAssignment)
routes.get("/update/:id", isLoggedIn, showUpdate)
routes.post("/update/:id", isLoggedIn, update)
routes.get("/remove/:id", isLoggedIn, remove)

module.exports = routes; 