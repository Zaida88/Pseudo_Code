const question = {}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

question.show = (req, res) => {
    res.render("question/create")
}
question.send = async (req, res) => {
    const ids = req.user.idUser
    const { nameQuestion, descriptionQuestion } = req.body
    const newQuestion = {
        nameQuestion,
        descriptionQuestion
    }
    await orm.question.create(newQuestion)
    req.flash("success", "Guardado exitosamente")
    res.redirect("/question/list/" + ids)
}
question.list = async (req, res) => {
    const list = await sql.query("select*from question")
    res.render("question/list", { list })
}
question.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select*from question where idQuestion=?", [id])
    res.render("question/update", { list })
}
question.update = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUser
    const { nameQuestion, descriptionQuestion } = req.body
    const newQuestion = {
        nameQuestion,
        descriptionQuestion
    }
    await orm.question.findOne({ where: { idQuestion: id } })
        .then(updateQuestion => {
            updateQuestion.update(newQuestion)
        })

    req.flash("success", "Guardado exitosamente")
    res.redirect("/question/list/" + ids)
}
module.exports = question