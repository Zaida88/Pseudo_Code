const express = require('express');
const routes = express.Router()

const { show, send, list, bring, update,}=require("../controllers/project.controller")

routes.get("/add", show)
routes.post('/send', send)
routes.get('/list', list)
routes.get('/edit', bring)
routes.post('/edit', update)




module.exports= routes
