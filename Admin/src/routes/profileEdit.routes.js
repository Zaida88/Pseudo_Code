
const express = require('express');
const routes = express.Router();

const {showUserProfileEdit , toUpdate} = require('../controllers/profile.controller')
routes.get('/profileEdit', showUserProfileEdit);
routes.post('/profileView', toUpdate);



module.exports = routes;

