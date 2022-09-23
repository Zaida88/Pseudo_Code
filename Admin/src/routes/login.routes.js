const express = require('express');
const routes = express.Router();

const { showLogin, showRegistration, registration, login, logout ,} = require('../controllers/login.controller')

routes.get('/registration', showRegistration);
routes.post('/registration', registration);
routes.get('/login/:id', showLogin);
routes.post('/login/:id', login);
routes.get('/logout', logout);

module.exports = routes;