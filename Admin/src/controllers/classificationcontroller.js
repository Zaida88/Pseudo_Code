const classificationCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
classificationCtl.show = (req, res) => {
    res.render("classification/classificationadd")
};

//ingresar
classificationCtl.send = async (req, res) => {
    const id = req.user.idUser
    const { nameClassification, descriptionClassification, imageClassification } = req.body
    const newClassification = {
        nameClassification,
        descriptionClassification,
        imageClassification,
        userIdUser: id
    }
    await orm.classifications.create(newClassification)
        .then(() => {
            req.flash("success", "Exito al guardar")
            res.redirect('/classification/list/' + id);
        })
}

//listar
classificationCtl.list = async (req, res) => {
    const list = await sql.query("select * from classifications")
    res.render("classification/classificationlist", { list })
}

//traer datos
classificationCtl.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from classifications where idClassification=?", [id])
    res.render("classification/classificationedit", { list })
}

//DELETE
classificationCtl.remove = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUser
    console.log(ids)
    await sql.query('DELETE FROM classifications WHERE idClassification = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/classification/list/'+ids);
}


//actualizar
classificationCtl.update = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUser
    const { nameClassification, descriptionClassification, imageClassification } = req.body
    const newClassification = {
        nameClassification,
        descriptionClassification,
        imageClassification,
    }
    await orm.classifications.findOne({ where: { idClassification: id } })
        .then(update => {
            update.update(newClassification)
        })
    req.flash("success", "Exito al guardar")
    res.redirect('/classification/list/' + ids);
}

module.exports = classificationCtl