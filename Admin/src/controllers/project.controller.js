const project = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")

project.show = (req, res) => {
    res.render("project/create", {max})
};

project.send = async (req, res) => {
    const id = req.user.idUser
    const { nameProject, descriptionProject, logoProject, mission, vision, objective, idObjective, unique, numbers } = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision,
    }
    await orm.projects.create(newProject)
    if (parseInt(numbers)===1){
        await sql.query("insert into objectives (objective, idProject) values (?,?)", [unique, (parseInt(idObjective))])
    }else{
        if (parseInt(numbers)>1){
            for (let i = 0; i < objective.length; i++) {
                await sql.query("insert into objectives (objective, idProject) values (?,?)", [objective[i], (parseInt(idObjective))])
            }
        }
    }
    req.flash("success", "Save success")
    res.redirect('/project/send/' + id);
}

project.list = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where idObjective = ?", [id])
    const list = await sql.query("select * from projects where idProject = ? ", [id])
    res.render("project/list", { list, listObjective })
}

project.bring = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where idObjective", [id])
    const list = await sql.query("select * from projects where idProject=?", [id])
    res.render("project/create", { list, listObjective })
}

project.update = async (req, res) => {
    const id = req.user.idUser
    const ids = req.params.id
    const { nameProject, descriptionProject, logoProject, mission, vision, objective } = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision,
    }
    await orm.projects.findOne({ where: { idProject: ids } })
        .then(actualize => {
            actualize.update(newProject)
        })
        if(objective.length>10){
            await sql.query("update objectives set objective = ? where idProject = ?", [objective, (parseInt(ids))])
        }
        if(objective.length<10){
            for (let i = 0; i < objective.length; i++) {
                await sql.query("update objectives set objective=? where idProject=?", [objective[i], (parseInt(ids)+i)])
            }
        }

    req.flash("success", "Guardado")
    res.redirect('/project/list/' + id);
}
project.remove = async (req, res) => {
    const id =  req.params.id
    await orm.projects.destroy({where: {idProject: ids}})
    .then(() => {
        req.flash('success', 'Guardado')
        res.redirect('project/list' + id);
    })
}
module.exports = project