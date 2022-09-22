const express = require('express');
const router = express.Router();

const { show, send, list, bring, update }=require("../controllers/question.Controller")

router.get("/add", show)
router.post("/add",send)
router.get("/list",list)
router.get("/edit",bring)
router.post("/edit",update)

module.exports=router