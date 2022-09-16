const projectCtl = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")

//mostrar
projectCtl.show = async (req, res) => {
    const max = await sql.query("select max(idProject) from projects")
    res.render("project/project_add", {max})
};

//ingresar
projectCtl.send = async (req, res) => {
    const id = req.user.idUser
    const { nameProject, descriptionProject, logoProject, mission, vision, objective, idObjective, unique, numbers } = req.body;
    const newProject = {
        nameProject,
        descriptionProject,
        logoProject,
        mission, 
        vision,
        userIduser: id 
    }
    await orm.projects.create(newProject)
    if (parseInt(numbers)===1){
        await sql.query("insert into objectives (objective,dataProjectidProject) values (?,?)", [unique, (parseInt(idObjective))])
    }else{
        if (parseInt(numbers)>1){
            for (let i = 0; i < objective.length; i++) {
                await sql.query("insert into objectives (objective,dataProjectidProject) values (?,?)", [objective[i], (parseInt(idObjective))])
            }
        }
    }
    req.flash("success", "Save success")
    res.redirect('/project/list/' + id);
}

//listar
projectCtl.list = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where dataProjectidProject=?", [id])
    const list = await sql.query("select * from projects where userIduser=?", [id])
    res.render("project/project_list", { list, listObjective })
}

//traer datos
projectCtl.traer = async (req, res) => {
    const id = req.params.id
    const listObjective = await sql.query("select * from objectives where dataProjectidProject=?", [id])
    const list = await sql.query("select * from projects where idProject=?", [id])
    res.render("project/project_edit", { list, listObjective })
}

//actualizar
projectCtl.actualizar = async (req, res) => {
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
        .then(updates => {
            updates.update(newProject)
        })
        if(objective.length>10){
            await sql.query("update objectives set objective=? where dataProjectidProject=?", [objective, (parseInt(ids))])
        }
        if(objective.length<10){
            for (let i = 0; i < objective.length; i++) {
                await sql.query("update objectives set objective=? where dataProjectidProject=?", [objective[i], (parseInt(ids)+i)])
            }
        }

    req.flash("success", "Save success")
    res.redirect('/project/list/' + id);
}

module.exports = projectCtl