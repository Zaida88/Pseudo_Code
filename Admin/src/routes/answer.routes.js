const express = require('express');
const router = express.Router();

const { show, send, list, bring, update }=require("../controllers/answer.Controller")

router.get("/create/:id", show)
router.post("/create/",send)
router.get("/list/:id",list)
router.get("/update/:id",bring)
router.post("/update/:id",update)

module.exports=router