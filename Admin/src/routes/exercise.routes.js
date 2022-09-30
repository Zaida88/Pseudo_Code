const express = require('express');
const routes = express.Router();

const { listLanguages, listExercises, create, show, detail, remove, update, showUpdate } = require('../controllers/exercise.controller')

const { isLoggedIn } = require('../lib/auth')

routes.get("/listLanguages", isLoggedIn, listLanguages)
routes.get("/listExercises/:id", isLoggedIn, listExercises)
routes.post("/create/:id", isLoggedIn, create)
routes.get("/create/:id", isLoggedIn, show)
routes.get("/detail/:id", isLoggedIn, detail)
routes.get("/remove/:id", isLoggedIn, remove)
routes.get("/update/:id", isLoggedIn, showUpdate)
routes.post("/update/:id", isLoggedIn, update)

module.exports = routes;

