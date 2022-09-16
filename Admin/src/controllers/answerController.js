const answer ={}

const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")

answer.show=(req,res)=>{
    res.render("answer")
}
answer.send=async(req,res)=>{
    const{answer}=req.body
    const newanswer={
        answer
    }
    await  orm.answers.create(newanswer)
    req.flash("success","guardado exitosamente")
    res.redirect("/answer/list")
}

answer.list=async(req,res)=>{
    const list=await sql.query("select*from answers")
    res.render("answer", {list})
}
answer.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from answers where idAnswer=?", {id})
    res.render("answer",{list})
}
answer.update=async(req,res)=>{
    const id=req.params.id
    const {answer}=req.body
    const newanswer={
        answer
    }
    await  orm.answers.findOne({where: {idAnswer: id}})
    .then(updateanswer=>{
        updateanswer.update(newanswer)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/answer/list")
}
module.exports= answer