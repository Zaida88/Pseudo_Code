const objectiveCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

objectiveCtl.show = async (req, res) => {
    const id = req.params.id
    const project = await sql.query("select * from projects where idProject", [id])
    res.render("objectives/objectivesadd", {project})
};

objectiveCtl.send = async (req, res) => {
    const id = req.params.id
    const { objective } = req.body;
    const newObjective = {
        objective,
        projectIdProject: id 
    }
    await orm.objectives.create(newObjective)
    .then(() => {
        req.flash("success", "Exito al guardar")
        res.redirect('/objectives/list/' + id);
    })
    
}


objectiveCtl.list = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from objectives where projectIdProject=?", [id]) 
    const project = await sql.query("select * from projects where idProject=?", [id])
    res.render("objectives/objectiveslist", {list, project})
}

objectiveCtl.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from objectives where idObjective=?", [id])
    res.render("objectives/objectivesedit", { list})
}

objectiveCtl.update = async (req, res) => {
    const id = req.user.idUser
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
objectiveCtl.remove = async (req, res) => {
    const ids = req.user.idUser
    const id = req.params.id
    await orm.objectives.destroy({ where: { idObjective: id } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/project/list/'+ids);
        })
}

module.exports = objectiveCtl
