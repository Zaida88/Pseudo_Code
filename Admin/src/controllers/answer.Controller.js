const answerCtl ={}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

answerCtl.show=(req,res)=>{
    res.render("answer/create")
}
answerCtl.send=async(req,res)=>{
    const ids=req.user.idUser
    const{nameAnswer, descriptionAnswer}=req.body
    const newAnswer={
        nameAnswer, 
        descriptionAnswer
    }
    await  orm.answers.create(newAnswer)
    req.flash("success","guardado exitosamente")
    res.redirect("/answers/list/"+ids)
}
answerCtl.list=async(req,res)=>{
    const list=await sql.query("select*from answers")
    res.render("answer/list", {list})
}
answerCtl.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from answers where idAnswer=?", [id])
    res.render("answer/update",{list})
}
answerCtl.update=async(req,res)=>{
    const id=req.params.id
    const ids=req.user.idUser
    const {nameAnswer, descriptionAnswer}=req.body
    const newAnswer={
        nameAnswer,
         descriptionAnswer
    }
    await  orm.answers.findOne({where: {idAnswer: id}})
    .then(updateAnswer=>{
        updateAnswer.update(newAnswer)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/answers/list/"+ids)
}
module.exports= answerCtl