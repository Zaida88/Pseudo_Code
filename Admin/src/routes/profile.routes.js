const express = require('express');
const routes = express.Router();

const { showUserProfile, showUserProfileEdit, toUpdate, } = require('../controllers/profile.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get('/profileView/:id', isLoggedIn, showUserProfile);
routes.get('/profileEdit/:id', isLoggedIn, showUserProfileEdit);
routes.post('/profileEdit/:id', isLoggedIn, toUpdate);






module.exports = routes;


