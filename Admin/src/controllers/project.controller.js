const projectCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

projectCtl.show = async (req, res) => {
    const max = await sql.query("select max(idProject) from projects")
    res.render("project/create", {max})
};

projectCtl.send = async (req, res) => {
    const id = req.user.idUser
    const { nameProject, descriptionProject, logoProject, mission, vision } = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision,
        userIdUser: id 
    }
    await orm.projects.create(newProject)
    req.flash("success", "Exito al guardar")
    res.redirect('/project/list/' + id);
}


projectCtl.list = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from projects where userIdUser=?", [id])
    res.render("project/list", { list})
}

projectCtl.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from projects where idProject=?", [id])
    res.render("project/update", { list,})
}

projectCtl.update = async (req, res) => {
    const id = req.user.idUser
    const ids = req.params.id
    const { nameProject, descriptionProject, logoProject, mission, vision} = req.body;
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
    req.flash("success", "Exito al guardar")
    res.redirect('/project/list/' + id);
}

module.exports = projectCtl
