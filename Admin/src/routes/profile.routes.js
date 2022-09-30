const express = require('express');
const routes = express.Router();

const {showUserProfile ,showUserProfileEdit,toUpdate,} = require('../controllers/profile.controller')

routes.get('/profileView/:id', showUserProfile);




routes.get('/profileEdit/:id',  showUserProfileEdit);
routes.post('/profileEdit/:id', toUpdate);






module.exports = routes;


