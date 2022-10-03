const languageCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
languageCtl.show = async (req, res) => {
    const id = req.params.id
    const classification = await sql.query("select * from classifications where idClassification=?", [id])
    res.render("language/languageadd",{classification})
};

//ingresar
languageCtl.send = async (req, res) => {
    const id = req.params.id
    const { nameLanguage, descriptionLanguage, imageLanguage } = req.body
    const newLanguage = {
        nameLanguage,
        descriptionLanguage,
        imageLanguage,
        classificationIdClassification: id
    }
    await orm.languages.create(newLanguage)
        .then(() => {
            req.flash("success", "Exito al guardar")
            res.redirect('/language/list/' + id);
        })
}

//listar
languageCtl.list = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from languages where classificationIdClassification=? ", [id])
    const classification = await sql.query("select * from classifications where idClassification=?", [id])
    res.render("language/languagelist", { list, classification})
}

//traer datos
languageCtl.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from languages where idLanguage=?", [id])
    res.render("language/languageedit", { list })
}

//DELETE

languageCtl.remove = async (req, res) => {
    const ids = req.user.idUser
    const id = req.params.id
    await orm.languages.destroy({ where: { idLanguage: id } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/classification/list/'+ids);
        })
}


//actualizar
languageCtl.update = async (req, res) => {
    const id = req.user.idUser
    const ids = req.params.id
    const { nameLanguage, descriptionLanguage, imageLanguage } = req.body
    const newLanguage = {
        nameLanguage,
        descriptionLanguage,
        imageLanguage,
    }
    await orm.languages.findOne({ where: { idLanguage: ids } })
        .then(update => {
            update.update(newLanguage)
        })
    req.flash("success", "Exito al guardar")
    res.redirect('/classification/list/' + id);
}

module.exports = languageCtl