const express = require("express")
const router = express.Router();
const user = require("../models/users.model");
 const fileup = require("express-fileupload");


const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm');
const { raw } = require("body-parser");

routes.get ('/ad', function(req,res,next){

 res.render("user_profile/profile_edit")
 res.render("user_profile/profile_view")
})


routes.post("/add",(req,res)=>{

    
    let samplefile;
    let uploadpath; 

    if(!req.files || Object.keys(req.files).length ===0){
        return res.status(400).send("archivo no subido")
    } ; 

    samplefile = req.files.samplefile;
    uploadpath = __dirname +"/src/public/img" + samplefile.name;
    samplefile.nv(uploadpath,function(err) {
        if(err) return res.status(500).send(err);
 res.send("archivo subido")
    })
})

user.query('select photo from users ', (err,rows) =>{
if(!err){
    res.render("profile_edit",{rows})
}
   
})

module.exports = router;



