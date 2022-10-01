const languageCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
languageCtl.show = (req, res) => {
    res.render("language/languagelist")
};

//ingresar
languageCtl.send = async(req,res) =>{
    const id = req.user.iduser
    const {nameLanguage, descriptionLanguage,imageLanguage} = req.body
    const newLanguage= {
        nameLanguage, 
        descriptionLanguage,
        imageLanguage, 
        userIduser: id
    }
    await orm.languages.create(newLanguage)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/language/list/'+id);
    })
}

//listar
languageCtl.list = async(req,res) =>{
    const list = await sql.query("select * from languages")
    res.render("language/languagelist",{list})
}

//traer datos
languageCtl.bring = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from languages where idLanguage=?",[id])
    res.render("language/languageedit",{list})
}

//DELETE
languageCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE * FROM languages WHERE idLanguage = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/language/list/');
}


//actualizar
languageCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {nameLanguage, descriptionLanguage,imageLanguage} = req.body
    const newLanguage = {
        nameLanguage, 
        descriptionLanguage,
        imageLanguage, 
    }
    await orm.languages.findOne({where:{idLanguage:idLanguage}})
    .then(update=>{
        update.update(newLanguage)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/language/list/'+id);
}

module.exports = languageCtl