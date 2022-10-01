const languagesCtl = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql");

//mostrar
languagesCtl.show = async(req, res) => {
    const id = req.params.id
    const languages = await sql.query("select * from languages where idLanguage = ?",[id])
    res.render("language/languageadd",{languages})
};

//ingresar
languagesCtl.Send = async(req,res) =>{
    const id = req.user.iduser
    const {nameLanguage, descriptionLanguage, imageLanguage} = req.body
    const newlanguages= {
        nameLanguage, 
        descriptionLanguage, 
        imageLanguage,
        userIduser: id,
    }
    await orm.languages.create(newlanguages)
    .then(() => {
    req.flash("success","Save success")
     res.redirect('/language/list/'+id);
    })
}

//list
languagesCtl.list = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from languages")
    res.render("language/languagelist",{list})
}

//traer datos
languagesCtl.traer = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from languages where idLanguage=?",[id])
    res.render("language/languageedit",{list})
}

//update
languagesCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {nameLanguage, descriptionLanguage, imageLanguage} = req.body
    const newlanguages = {
        nameLanguage, 
        descriptionLanguage, 
        imageLanguage,
    }
    await orm.languages.findOne({where:{idlanguages:idlanguages}})
    .then(update=>{
        update.update(newlanguages)
    })
    req.flash("success","Save success")
     res.redirect('/language/list/'+id);
}

module.exports = languagesCtl