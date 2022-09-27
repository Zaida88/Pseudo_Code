const express = require('express');
const routes = express.Router();

const {showUserProfile , fetchData } = require('../controllers/profile.controller')

routes.get('/profileView', showUserProfile);
routes.post('/profileView', fetchData );


module.exports = routes;