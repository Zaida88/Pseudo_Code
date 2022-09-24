const express = require('express');
const routes = express.Router();

const { listLanguages, listExercises, create, show, detail, remove, update,showUpdate } = require('../controllers/exercise.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get("/listLanguages", listLanguages)
routes.get("/listExercises/:id", listExercises)
routes.post("/create/:id", create)
routes.get("/create/:id", show)
routes.get("/detail/:id", detail)
routes.get("/remove/:id", remove)
routes.get("/update/:id", showUpdate)
routes.post("/update/:id", update)

module.exports = routes;

