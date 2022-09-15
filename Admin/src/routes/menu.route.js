const express = require("express");
const router = express.Router()
const menu = require("../controllers/Menu.contoller")
router.get("/",menu.user)