const codificacionCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
codificacionCtl.show = async (req, res) => {
    const id = req.params.id
    const language = await sql.query("select * from languages where idLanguage  = ?", [id])
    res.render("coding/codingadd", { language })
};

//ingresar
codificacionCtl.send = async (req, res) => {
    const id = req.params.id
    const { nameCode, descriptionCode, code, video } = req.body
    const newCode = {
        nameCode,
        descriptionCode,
        code,
        video,
        languageIdLanguage: id,
    }
    await orm.codes.create(newCode)
        .then(() => {
            req.flash("success", "Exito al guardar")
            res.redirect('/coding/list/' + id);
        })
}

//listar
codificacionCtl.list = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from codes where languageIdLanguage=? ", [id])
    const language = await sql.query("select * from languages where idLanguage=?", [id])
    res.render("coding/codinglist", { list, language })
}

//traer datos
codificacionCtl.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from codes where idCode =?", [id])
    res.render("coding/codingedit", { list })
}

//actualizar
codificacionCtl.update = async (req, res) => {
    const id = req.user.idUser
    const ids = req.params.id
    const { nameCode, descriptionCode, code, video } = req.body
    const newCode = {
        nameCode,
        descriptionCode,
        code,
        video,
    }
    await orm.codes.findOne({ where: { idCode: ids } })
        .then(update => {
            update.update(newCode)
        })
    req.flash("success", "Exito al guardar")
    res.redirect('/classification/list/' + id);
}

//DELETE

codificacionCtl.remove = async (req, res) => {
    const ids = req.user.idUser
    const id = req.params.id
    await orm.codes.destroy({ where: { idCode: id } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/classification/list/'+ids);
        })
}

module.exports = codificacionCtl