const express = require("express")
const router = express.Router();
const app = express();
 const fileup = require("express-fileupload");


const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm');
const { raw } = require("body-parser");

app.get ('/', function(req,res){

 res.render("../views/user_profile/profile_edit.hbs")

})


app.post("",(req,res)=>{

    
    let samplefile;
    let uploadpath; 

    if(!req.files || Object.keys(req.files).length ===0){
        return res.status(400).send("archivo no subido")
    } ; 

    samplefile = req.files.samplefile;
    uploadpath = __dirname +"/src/public/img/" + samplefile.name;
    samplefile.nv(uploadpath,function(err) {
        if(err) return res.status(500).send(err);
 res.send("archivo subido")
    })
})



module.exports = app;



