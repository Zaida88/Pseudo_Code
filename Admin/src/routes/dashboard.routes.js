const express = require('express');
const routes = express.Router()

const { show } = require('../controllers/dashboard.controller');


const { isLoggedIn } = require('../lib/auth')

routes.get('/show/', isLoggedIn, show)

module.exports = routes