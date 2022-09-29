const express = require('express');
const router = express.Router();

const { show, send, list, bring, update }=require("../controllers/test.Controller")

router.get("/create/:id",show)
router.post("/create/:id",send)
router.get("/list/:id",list)
router.get("/update/:id",bring)
router.post("/update/:id",update)

module.exports=router