const testCtl={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

testCtl.show=(req,res)=>{
    res.render("test/create")
}
testCtl.send=async(req,res)=>{
    const ids=req.user.idUser
    const{nameTest, descriptionTest}=req.body
    const newTest={
        nameTest,
        descriptionTest
    }
    await  orm.tests.create(newTest)
    req.flash("success","Guardado exitosamente")
    res.redirect("/tests/list/"+ids)
}

testCtl.list=async(req,res)=>{
    const list=await sql.query("select*from tests")
    res.render("test/list", {list})
}
testCtl.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from tests where idTest=?", [id])
    res.render("test/update",{list})
    
}
testCtl.update=async(req,res)=>{
    const id=req.params.id
    const ids=req.user.idUser
    const {nameTest,descriptionTest}=req.body
    const newTest={
        nameTest,
        descriptionTest
    }
    await  orm.tests.findOne({where: {idTest: id}})
    .then(updateTest=>{
        updateTest.update(newTest)
    })
        
    req.flash("success","Guardado exitosamente")
    res.redirect("/test/list/"+ids)
}
module.exports= testCtl