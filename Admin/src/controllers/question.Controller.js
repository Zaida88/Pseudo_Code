const question ={}

const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")

question.show=(req,res)=>{
    res.render("question")
}
question.send=async(req,res)=>{
    const{question}=req.body
    const newquestion={
        question
    }
    await  orm.questions.create(newquestion)
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list")
}

question.list=async(req,res)=>{
    const list=await sql.query("select*from questions")
    res.render("question", {list})
}
question.bring=async(req,res)=>{
    const id=req.params.id
    const list=await sql.query("select*from questions where idQuestion=?", {id})
    res.render("question",{list})
}
question.update=async(req,res)=>{
    const id=req.params.id
    const {question}=req.body
    const newquestion={
        question
    }
    await  orm.questions.findOne({where: {idQuestion: id}})
    .then(updatequestion=>{
        updatequestion.update(newquestion)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/question/list")
}
module.exports= question