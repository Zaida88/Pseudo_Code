const express = require('express');
const router = express.Router();

const { show, send, list, bring, update } = require("../controllers/question.controller")

const { isLoggedIn } = require('../lib/auth')

router.get("/create/:id", isLoggedIn, show)
router.post("/create/:id", isLoggedIn, send)
router.get("/list/:id", isLoggedIn, list)
router.get("/update/:id", isLoggedIn, bring)
router.post("/update/:id", isLoggedIn, update)

module.exports = router