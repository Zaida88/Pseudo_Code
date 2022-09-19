const languagesCtl = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql");

//mostrar
languagesCtl.show = async(req, res) => {
    const id = req.params.id
    const languages = await sql.query("select * from languages where idlanguages = ?",[id])
    res.render("languages/languages_add",{languages})
};

//ingresar
languagesCtl.Send = async(req,res) =>{
    const id = req.user.iduser
    const {name, description, languages} = req.body
    const newlanguages= {
        name, 
        description, 
        userIduser: id,
        languagesLenguajeIdlanguages:languages
    }
    await orm.languages.create(newlanguages)
    .then(() => {
    req.flash("success","Save success")
     res.redirect('/languages/list/'+id);
    })
}

//list
languagesCtl.list = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from languagess")
    res.render("languages/languages_list",{list})
}

//traer datos
languagesCtl.traer = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from languagess where idlanguages=?",[id])
    res.render("languages/languages_edit",{list})
}

//update
languagesCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {name, description, idlanguages} = req.body
    const newlanguages = {
        name, 
        description, 
    }
    await orm.languages.findOne({where:{idlanguages:idlanguages}})
    .then(update=>{
        update.update(newlanguages)
    })
    req.flash("success","Save success")
     res.redirect('/languages/list/'+id);
}

module.exports = languagesCtl