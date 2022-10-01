const objetiveCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

objetiveCtl.showO = async (req, res) => {
    const max = await sql.query("select max(idObjective) from objectives")
    res.render("project/createObjective", {max})
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
    const listObjetive = await sql.query("select * from objectives where userIdUser=?", [id])
    res.render("project/list", { listObjetive})
}

objetiveCtl.bringO = async (req, res) => {
    const id = req.params.id
    const listObjetive = await sql.query("select * from objectives where idObjective=?", [id])
    res.render("project/update", { listObjetive})
}

objetiveCtl.updateO = async (req, res) => {
    const id = req.user.idusuario
    const ids = req.params.id
    const {objective} = req.body
    const newObjective = {
        objective,
    }
    await orm.objectives.findOne({ where: { idObjective: ids } })
        .then(actualize => {
            actualize.update(newObjective)
        })
    req.flash("success", "Exito al guardar")
    res.redirect('/project/list/' + id);
    
}
objetiveCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.objectives.destroy({where: {idObjective: ids}})
    .then(() => {
        req.flash('success', 'Guardado')
        res.redirect('/project/list' + id);
    })
}

module.exports = objetiveCtl
