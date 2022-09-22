const question ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

question.show=(req,res)=>{
    res.render("question/add")
}
question.send=async(req,res)=>{
    const{nameQuestion , descriptionQuestion}=req.body
    const newquestion={
        nameQuestion ,
         descriptionQuestion
    }
    await  orm.questions.create(newquestion)
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list")
}

question.list=async(req,res)=>{
    const list=await sql.query("select*from questions")
    res.render("question/list", {list})
}
question.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from questions where idQuestion=?", {id})
    res.render("question/edit",{list})
}
question.update=async(req,res)=>{
    const id=req.params.id
    const {nameQuestion , descriptionQuestion}=req.body
    const newquestion={
        nameQuestion , 
        descriptionQuestion
    }
    await  orm.questions.findOne({where: {idQuestion: id}})
    .then(updatequestion=>{
        updatequestion.update(newquestion)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list")
}
module.exports= question