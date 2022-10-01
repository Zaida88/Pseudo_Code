const express = require('express');
const router = express.Router();

const { show,bring, send, list, update, delet }=require("../controllers/classificationcontroller")
const { isLoggedIn } = require('../lib/auth')

router.get("/add/:id", isLoggedIn, show)

router.get("/edit/:id", isLoggedIn, bring)

router.get("/list/:id", isLoggedIn, list)

router.post("/add/:id", isLoggedIn, send)

router.post("/edit/:id", isLoggedIn, update)

router.get("/delete/:id", isLoggedIn, delet)


module.exports=router
