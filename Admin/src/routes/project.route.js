const express = require('express');
const routes = express.Router()

const { show, send, list, bring, update, remove }=require("../controllers/project.controller")
const { isLoggedIn }=require('../lib/auth')

routes.get("/projectadd/:id", isLoggedIn, show)
routes.post('/projectadd/:id', isLoggedIn, send)
routes.get('/projectlist/:id', isLoggedIn, list)
routes.get('/projectedit/:id', isLoggedIn, bring)
routes.post('/projectedit/:id', isLoggedIn, update)
routes.get('/remove/:id', isLoggedIn, remove)



module.exports= routes
