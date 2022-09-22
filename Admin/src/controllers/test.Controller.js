const test ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

test.show=(req,res)=>{
    res.render("test/add")
}
test.send=async(req,res)=>{
    const{nameTests, descriptionTests}=req.body
    const newtest={
        nameTests,
        descriptionTests
    }
    await  orm.tests.create(newtest)
    req.flash("success","guardado exitosamente")
    res.redirect("/test/list")
}

test.list=async(req,res)=>{
    const list=await sql.query("select*from tests")
    res.render("test/list", {list})
}
test.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from tests where idTest=?", {id})
    res.render("test/edit",{list})
}
test.update=async(req,res)=>{
    const id=req.params.id
    const {nameTests,descriptionTests}=req.body
    const newtest={
        nameTests,
        descriptionTests
    }
    await  orm.tests.findOne({where: {idTests: id}})
    .then(updatetest=>{
        updatetest.update(newtest)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/test/list")
}
module.exports= test