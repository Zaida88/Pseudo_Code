const test = {}

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

test.show = (req, res) => {
    res.render("test/create")
}
test.send = async (req, res) => {
    const ids = req.user.idUser
    const { nameTest, descriptionTest } = req.body
    const newTest = {
        nameTest,
        descriptionTest
    }
    await orm.test.create(newTest)
    req.flash("success", "Guardado exitosamente")
    res.redirect("/test/list/" + ids)
}

test.list = async (req, res) => {
    const list = await sql.query("select*from test")
    res.render("test/list", { list })
}
test.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select*from test where idTest=?", [id])
    res.render("test/update", { list })

}
test.update = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUser
    const { nameTest, descriptionTest } = req.body
    const newTest = {
        nameTest,
        descriptionTest
    }
    await orm.test.findOne({ where: { idTest: id } })
        .then(updateTest => {
            updateTest.update(newTest)
        })

    req.flash("success", "Guardado exitosamente")
    res.redirect("/test/list/" + ids)
}
module.exports = test