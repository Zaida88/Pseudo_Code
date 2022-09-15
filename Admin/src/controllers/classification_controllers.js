const classificationCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

//mostrar
classificationCtl.mostrar = async(req, res) => {
    const id = req.params.id
    const classification = await sql.query("select * from classification where idclassification = ?",[id])
    res.render("classification/classification_agregar",{classification})
};

//ingresar
classificationCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {name, description, classification} = req.body
    const nuevaclassification= {
        name, 
        description, 
        usuarioIdusuario: id,
        classificationLenguajeIdclassification:classification
    }
    await orm.classification.create(nuevaclassification)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/classification/listar/'+id);
    })
}

//listar
classificationCtl.listar = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from classifications")
    res.render("classification/classification_listar",{lista})
}

//traer datos
classificationCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from classifications where idclassification=?",[id])
    res.render("classification/classification_editar",{lista})
}

//actualizar
classificationCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre, descripcion, idclassification} = req.body
    const nuevaclassification = {
        nombre, 
        descripcion, 
    }
    await orm.classification.findOne({where:{idclassification:idclassification}})
    .then(actualizacion=>{
        actualizacion.update(nuevaclassification)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/classification/listar/'+id);
}

module.exports = classificationCtl