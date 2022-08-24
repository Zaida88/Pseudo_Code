const codificacionCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

//mostrar
codificacionCtl.mostrar = async(req, res) => {
    const id = req.params.id
    const clasificacion = await sql.query("select * from clasificacion_lenguajes where idclasificacion = ?",[id])
    res.render("codificacion/codificacion_agregar",{clasificacion})
};

//ingresar
codificacionCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre, descripcion, clasificacion} = req.body
    const nuevaCodificacion= {
        nombre, 
        descripcion, 
        usuarioIdusuario: id,
        clasificacionLenguajeIdclasificacion:clasificacion
    }
    await orm.codificacion.create(nuevaCodificacion)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/codificacion/listar/'+id);
    })
}

//listar
codificacionCtl.listar = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from codificacions")
    res.render("codificacion/codificacion_listar",{lista})
}

//traer datos
codificacionCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from codificacions where idcodificacion=?",[id])
    res.render("codificacion/codificacion_editar",{lista})
}

//actualizar
codificacionCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre, descripcion, idcodificacion} = req.body
    const nuevaCodificacion = {
        nombre, 
        descripcion, 
    }
    await orm.codificacion.findOne({where:{idcodificacion:idcodificacion}})
    .then(actualizacion=>{
        actualizacion.update(nuevaCodificacion)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/codificacion/listar/'+id);
}

module.exports = codificacionCtl