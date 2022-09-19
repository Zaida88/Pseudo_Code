const express = require('express');
const routes = express.Router()

const { show, list } = require('../controllers/dashboard.controller');


const { isLoggedIn } = require('../lib/auth')

routes.get('/dashboard/', isLoggedIn, show)
routes.get('/dashboard/', isLoggedIn, list)

module.exports = routes