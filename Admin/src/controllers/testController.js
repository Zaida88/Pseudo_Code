const test ={}

const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")

test.show=(req,res)=>{
    res.render("test")
}
test.send=async(req,res)=>{
    const{test}=req.body
    const newtest={
        test
    }
    await  orm.tests.create(newtest)
    req.flash("success","guardado exitosamente")
    res.redirect("/test/list")
}

test.list=async(req,res)=>{
    const list=await sql.query("select*from tests")
    res.render("test", {list})
}
test.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from tests where idTest=?", {id})
    res.render("test",{list})
}
test.update=async(req,res)=>{
    const id=req.params.id
    const {test}=req.body
    const newtest={
        test
    }
    await  orm.tests.findOne({where: {idTests: id}})
    .then(updatetest=>{
        updatetest.update(newtest)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/test/list")
}
module.exports= test