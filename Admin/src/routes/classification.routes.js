const express = require('express');

const router = express.Router()

const{ show, bring, list, send, update, remove} = require("../controllers/classificationcontroller")
const { isLoggedIn } = require('../lib/auth')

router.get("/add/:id", isLoggedIn, show)
router.get("/edit/:id", isLoggedIn, bring)
router.get("/list/:id", isLoggedIn, list)
router.post("/add/:id", isLoggedIn, send)
router.post("/edit/:id", isLoggedIn, update)
router.get("/remove/:id", isLoggedIn, remove)

module.exports = router
