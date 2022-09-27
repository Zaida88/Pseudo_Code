const test ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

test.show=(req,res)=>{
    res.render("test/create")
}
test.send=async(req,res)=>{
    const ids=req.user.idUser
    const{nameTests, descriptionTests}=req.body
    const newTest={
        nameTests,
        descriptionTests
    }
    await  orm.tests.create(newTest)
    req.flash("success","guardado exitosamente")
    res.redirect("/tests/list/"+ids)
}

test.list=async(req,res)=>{
    const list=await sql.query("select*from tests")
    res.render("test/list", {list})
}
test.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from tests where idTests=?", [id])
    res.render("test/update",{list})
    
}
test.update=async(req,res)=>{
    const id=req.params.id
    const ids=req.user.idUser
    const {nameTests,descriptionTests}=req.body
    const newTest={
        nameTests,
        descriptionTests
    }
    await  orm.tests.findOne({where: {idTests: id}})
    .then(updateTest=>{
        updateTest.update(newTest)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/tests/list/"+ids)
}
module.exports= test