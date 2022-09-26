
const express = require('express');
const routes = express.Router();

const {show , act} = require('../controllers/profile.controller')
routes.get('/profile_edit', show);
//routes.post('/profile_view', act);



module.exports = routes;

