const express = require('express');

const routes = express.Router()


const { show, send, list, bring, update } = require('../controllers/project.controller');
const { showOjective, bringOjective, listOjective, sendOjective, updateOjective } = require('../controllers/objective.controller');

const { isLoggedIn } = require('../lib/auth')

routes.get("/create/", isLoggedIn, show, showOjective)

routes.get("/update/:id", isLoggedIn, bring, bringOjective)

routes.get("/list/:id", isLoggedIn, list, listOjective)

routes.post("/create/", isLoggedIn, send, sendOjective)

routes.post("/update/:id", isLoggedIn, update, updateOjective)

module.exports = routes