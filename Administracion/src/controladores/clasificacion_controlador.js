const clasificacionCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

//mostrar
clasificacionCtl.mostrar = (req, res) => {
    res.render("clasificacion/clasificacion_agregar")
};

//ingresar
clasificacionCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre_clasificacion} = req.body
    const nuevaClasificacion= {
        nombre_clasificacion, 
        usuarioIdusuario: id
    }
    await orm.clasificacion_lenguaje.create(nuevaClasificacion)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/clasificacion/listar/'+id);
    })
}

//listar
clasificacionCtl.listar = async(req,res) =>{
    const lista = await sql.query("select * from clasificacion_lenguajes")
    res.render("clasificacion/clasificacion_listar",{lista})
}

//traer datos
clasificacionCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from clasificacion_lenguajes where idclasificacion=?",[id])
    res.render("clasificacion/clasificacion_editar",{lista})
}

//actualizar
clasificacionCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre_clasificacion, idclasificacion} = req.body
    const nuevaClasificacion = {
        nombre_clasificacion, 
    }
    await orm.clasificacion_lenguaje.findOne({where:{idclasificacion:idclasificacion}})
    .then(actualizacion=>{
        actualizacion.update(nuevaClasificacion)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/clasificacion/listar/'+id);
}

module.exports = clasificacionCtl