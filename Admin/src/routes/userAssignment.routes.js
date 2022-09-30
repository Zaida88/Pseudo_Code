const express = require('express');
const routes = express.Router();

const { show, list, get } = require('../controllers/userAssignment.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get("/userAssignment/list", isLoggedIn, list)
routes.get("/userAssignment/create", isLoggedIn, show)
routes.get("/userAssignment/edit/:id", isLoggedIn, get)

module.exports = routes; 