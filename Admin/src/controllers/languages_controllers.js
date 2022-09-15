const languagesCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

//mostrar
languagesCtl.mostrar = async(req, res) => {
    const id = req.params.id
    const languages = await sql.query("select * from languages where idlanguages = ?",[id])
    res.render("languages/languages_agregar",{languages})
};

//ingresar
languagesCtl.enviar = async(req,res) =>{
    const id = req.user.iduser
    const {name, description, languages} = req.body
    const newlanguages= {
        name, 
        description, 
        userIduser: id,
        languagesIdlanguages:languages
    }
    await orm.languages.create(newlanguages)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/languages/listar/'+id);
    })
}

//listar
languagesCtl.listar = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from languages")
    res.render("languages/languages_listar",{lista})
}

//traer datos
languagesCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from languages where idlanguages=?",[id])
    res.render("languages/languages_editar",{lista})
}

//actualizar
languagesCtl.actualizar = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {name, description, idlanguages} = req.body
    const nuevalanguages = {
        name, 
        description, 
    }
    await orm.languages.findOne({where:{idlanguages:idlanguages}})
    .then(actualizacion=>{
        actualizacion.update(newlanguages)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/languages/listar/'+id);
}

module.exports = languagesCtl