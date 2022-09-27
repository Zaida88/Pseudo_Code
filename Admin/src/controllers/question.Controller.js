const question ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

question.show=(req,res)=>{
    res.render("question/create")
}
question.send=async(req,res)=>{
    const ids=req.user.idUser
    const{nameQuestion , descriptionQuestion}=req.body
    const newQuestion={
        nameQuestion ,
         descriptionQuestion
    }
    await  orm.questions.create(newQuestion)
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list/"+ids)
}
question.list=async(req,res)=>{
    const list=await sql.query("select*from questions")
    res.render("question/list", {list})
}
question.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from questions where idQuestion=?", [id])
    res.render("question/edit",{list})
}
question.update=async(req,res)=>{
    const id=req.params.id
    const ids=req.user.idUser
    const {nameQuestion , descriptionQuestion}=req.body
    const newQuestion={
        nameQuestion , 
        descriptionQuestion
    }
    await  orm.questions.findOne({where: {idQuestion: id}})
    .then(updateQuestion=>{
        updateQuestion.update(newQuestion)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list/"+ids)
}
module.exports= question