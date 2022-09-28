const objetiveCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

objetiveCtl.showO = async (req, res) => {
    const max = await sql.query("select max(idObjetive) from objetives")
    res.render("project/create", {max})
};

objetiveCtl.sendO = async (req, res) => {
    const id = req.user.idUser
    const { objective } = req.body;
    const newObjective = {
        objective,
        userIdUser: id 
    }
    await orm.objectives.create(newObjective)
    req.flash("success", "Exito al guardar")
    res.redirect('/project/list/' + id);
}


objetiveCtl.listO = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from objetives where userIdUser=?", [id])
    res.render("project/list", { list})
}

objetiveCtl.bringO = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from objetives where idProject=?", [id])
    res.render("project/update", { list,})
}

objetiveCtl.updateO = async (req, res) => {
    const id = req.user.idusuario
    const ids = req.params.id
    const {objective} = req.body
    const newObjective = {
        objective,
    }
    await orm.objectives.findOne({ where: { idProject: ids } })
        .then(actualize => {
            actualize.update(newObjective)
        })
    req.flash("success", "Exito al guardar")
    res.redirect('/project/list/' + id);
    
}
objetiveCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.objectives.destroy({where: {idProject: ids}})
    .then(() => {
        req.flash('success', 'Guardado')
        res.redirect('/project/list' + id);
    })
}

module.exports = objetiveCtl
