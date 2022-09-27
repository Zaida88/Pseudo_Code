
const express = require('express');
const routes = express.Router();

const {showUserProfileEdit , toUpdate} = require('../controllers/profileEdit.controller')
routes.get('/profilEdit', showUserProfileEdit);
routes.post('/profileeEdit', toUpdate);



module.exports = routes;

