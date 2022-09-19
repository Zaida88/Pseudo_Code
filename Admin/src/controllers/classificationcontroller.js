const classificationCtl = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql");

//mostrar
classificationCtl.show = async(req, res) => {
    const id = req.params.id
    const classification = await sql.query("select * from classification where idclassification = ?",[id])
    res.render("classification/classification_add",{classification})
};

//ingresar
classificationCtl.Send = async(req,res) =>{
    const id = req.user.iduser
    const {name, description, classification} = req.body
    const newclassification= {
        name, 
        description, 
        userIduser: id,
        classificationLenguajeIdclassification:classification
    }
    await orm.classification.create(newclassification)
    .then(() => {
    req.flash("success","Save success")
     res.redirect('/classification/list/'+id);
    })
}

//list
classificationCtl.list = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from classifications")
    res.render("classification/classification_list",{list})
}

//traer datos
classificationCtl.traer = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from classifications where idclassification=?",[id])
    res.render("classification/classification_edit",{list})
}

//update
classificationCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {name, description, idclassification} = req.body
    const newclassification = {
        name, 
        description, 
    }
    await orm.classification.findOne({where:{idclassification:idclassification}})
    .then(update=>{
        update.update(newclassification)
    })
    req.flash("success","Save success")
     res.redirect('/classification/list/'+id);
}

module.exports = classificationCtl