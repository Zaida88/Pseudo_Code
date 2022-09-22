const express = require("express")
const routes = express.Router();
const user = require("../models/users.model");
 routes.get("/", function(req,res,next)){
    res.render("profile_edit",{title: "express"})
 }