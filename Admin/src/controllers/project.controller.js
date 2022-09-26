const project = {}
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

project.show = (req, res) => {
    res.render("project/add")
};

project.send = async (req, res) => {
    const { nameProject, descriptionProject, logoProject, mission, vision } = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision
    }
    await orm.projects.create(newProject)
    req.flash("success", "Guardado")
    res.redirect('/project/list/');
}

project.list = async (req, res) => {
    const list = await sql.query("select * from projects")
    res.render("project/list", {list})
}

project.bring = async (req, res) => {
    const id = req.params.id
    const list = await sql.query("select * from projects where idProject=?", {id})
    res.render("project/edit", {list})
}

project.update = async (req, res) => {
    const id = req.user.id
    const { nameProject, descriptionProject, logoProject, mission, vision} = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision
    }
    await orm.projects.findOne({ where: { idProject: id }})
        .then(actualize => {
            actualize.update(newProject)
        })
    req.flash("success", "Guardado")
    res.redirect('/project/list/')

}
module.exports = project



