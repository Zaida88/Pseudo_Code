const encodingsCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

encodingsCtl.mostrar = async(req, res) => {
    const id = req.params.id
    const classfication = await sql.query("select * from classfication where idclassfication = ?",[id])
    res.render("encodings/encodings_agregar",{classfication})
};



//ingresar
encodingsCtl.enviar = async(req,res) =>{
    const id = req.user.iduser
    const {name, description, classfication} = req.body
    const newencodings= {
        name, 
        description, 
        userIduser: id,
        classficationIdclassfication:classfication
    }
    await orm.encodings.create(newencodings)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/encodings/listar/'+id);
    })
}

//listar
encodingsCtl.listar = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from encodingss")
    res.render("encodings/encodings_listar",{lista})
}

//traer datos
encodingsCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from encodingss where idencodings=?",[id])
    res.render("encodings/encodings_editar",{lista})
}

//actualizar
encodingsCtl.actualizar = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {name, description, idencodings} = req.body
    const nuevaencodings = {
        name, 
        description, 
    }
    await orm.encodings.findOne({where:{idencodings:idencodings}})
    .then(actualizacion=>{
        actualizacion.update(nuevaencodings)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/encodings/listar/'+id);
}

module.exports = encodingsCtl