const objetiveCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

objetiveCtl.showOjective = async (req, res) => {
    const max = await sql.query("select max(idObjective) from objectives")
    res.render("project/create", {max})
};

objetiveCtl.sendOjective = async (req, res) => {
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


objetiveCtl.listOjective = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where userIdUser=?", [id])
    res.render("project/list", { listObjective})
}

objetiveCtl.bringOjective = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where idObjective=?", [id])
    res.render("project/update", { listObjective})
}

objetiveCtl.updateOjective = async (req, res) => {
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
objetiveCtl.removeOjective = async (req, res) => {
    const id =  req.params.id
    await orm.objectives.destroy({where: {idObjective: ids}})
    .then(() => {
        req.flash('success', 'Guardado')
        res.redirect('/project/list' + id);
    })
}

module.exports = objetiveCtl
