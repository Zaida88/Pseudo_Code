const classificationCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
classificationCtl.show = (req, res) => {
    res.render("classification/classificationlist")
};

//ingresar
classificationCtl.send = async(req,res) =>{
    const id = req.user.iduser
    const {nameClassification, descriptionClassification,imageClassification} = req.body
    const newClassification= {
        nameClassification, 
        descriptionClassification,
        imageClassification, 
        userIduser: id
    }
    await orm.classifications.create(newClassification)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/classification/add/'+id);
    })
}

//listar
classificationCtl.list = async(req,res) =>{
    const list = await sql.query("select * from classifications")
    res.render("classification/classificationlist",{list})
}

//traer datos
classificationCtl.bring = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from classifications where idClassification=?",[id])
    res.render("classification/classificationedit",{list})
}

//DELETE
classificationCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE FROM classifications WHERE idClassification = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/classification/remove/');
}


//actualizar
classificationCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {nameClassification, descriptionClassification,imageClassification} = req.body
    const newClassification = {
        nameClassification, 
        descriptionClassification,
        imageClassification, 
    }
    await orm.classifications.findOne({where:{idClassification:idClassification}})
    .then(update=>{
        update.update(newClassification)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/classification/list/'+id);
}

module.exports = classificationCtl