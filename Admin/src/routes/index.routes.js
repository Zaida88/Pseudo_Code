const express = require('express');
const routes = express.Router();

const { show, send } = require('../controllers/index.controller');

routes.get('/', show);
routes.post('/', send)

module.exports = routes;