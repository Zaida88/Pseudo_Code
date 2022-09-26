const express = require('express');
const routes = express.Router();

const {show , get_user} = require('../controllers/profile.controller')

routes.get('/profile_view', show);
routes.post('profile_view', get_user);


module.exports = routes;