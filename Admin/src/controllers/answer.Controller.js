const answer ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

answer.show=(req,res)=>{
    res.render("answer/add")
}
answer.send=async(req,res)=>{
    const{nameAnswer, descriptionAnswer}=req.body
    const newanswer={
        nameAnswer, 
        descriptionAnswer
    }
    await  orm.answers.create(newanswer)
    req.flash("success","guardado exitosamente")
    res.redirect("/answer/list")
}

answer.list=async(req,res)=>{
    const list=await sql.query("select*from answers")
    res.render("answer/list", {list})
}
answer.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from answers where idAnswer=?", {id})
    res.render("answer/edit",{list})
}
answer.update=async(req,res)=>{
    const id=req.params.id
    const {nameAnswer, descriptionAnswer}=req.body
    const newanswer={
        nameAnswer,
         descriptionAnswer
    }
    await  orm.answers.findOne({where: {idAnswer: id}})
    .then(updateanswer=>{
        updateanswer.update(newanswer)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/answer/list")
}
module.exports= answer