const express = require('express');
const routes = express.Router()

const { show, send, list, bring, update, remove }=require("../controllers/project.controller")
const { isLoggedIn }=require('../lib/auth')

routes.get("/create/:id", isLoggedIn, show)
routes.post('/send/:id', isLoggedIn, send)
routes.get('/list/:id', isLoggedIn, list)
routes.get('/create/:id', isLoggedIn, bring)
routes.post('/list/:id', isLoggedIn, update)
routes.get('/remove/:id', isLoggedIn, remove)



module.exports= routes
