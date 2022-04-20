const estructuraCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql")

//mostrar
estructuraCtl.mostrar = async(req, res) => {
    const id = req.params.id
    const codificacion = await sql.query("select * from codificacions")
    res.render("estructura/estructura_agregar",{codificacion})
};

//ingresar
estructuraCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre, descripcion,codigo,codificacion} = req.body
    const nuevaEstructura = {
        nombre, 
        descripcion, 
        codigo,  
        usuarioIdusuario: id,
        codificacionIdcodificacion:codificacion
    }
    await orm.estructura.create(nuevaEstructura)
    req.flash("success","Exito al guardar")
     res.redirect('/estructura/listar/'+id);
}

//listar
estructuraCtl.listar = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from estructuras")
    res.render("estructura/estructura_listar",{lista})
}

//traer datos
estructuraCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from estructuras where idestructura=?",[id])
    res.render("estructura/estructura_editar",{lista})
}

//actualizar
estructuraCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre, descripcion, codigo} = req.body
    const nuevaEstructura = {
        nombre, 
        descripcion, 
        codigo 
    }
    await orm.estructura.findOne({where:{idestructura:ids}})
    .then(actualizacion=>{
        actualizacion.update(nuevaEstructura)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/estructura/listar/'+id);
}

module.exports = estructuraCtl