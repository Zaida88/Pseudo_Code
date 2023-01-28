const questionCtl ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

questionCtl.show=(req,res)=>{
    res.render("question/create")
}
questionCtl.send=async(req,res)=>{
    const ids=req.user.idUser
    const{question }=req.body
    const newQuestion={
        question
    }
    await  orm.questions.create(newQuestion)
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list/"+ids)
}
questionCtl.list=async(req,res)=>{
    const list=await sql.query("select*from questions")
    res.render("question/list", {list})
}
questionCtl.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from questions where idQuestion=?", [id])
    res.render("question/update",{list})
}
questionCtl.update=async(req,res)=>{
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
module.exports= questionCtl