const estructuraCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql")

//mostrar
estructuraCtl.mostrar = (req, res) => {
    res.render("estructura/estructura_agregar")
};

//ingresar
estructuraCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre, descripcion, codigo} = req.body
    const nuevaEstructura = {
        nombre, 
        descripcion, 
        codigo,  
        usuarioIdusuario: id
    }
    await orm.estructura.create(nuevaEstructura)

    for(let i=0 ; i<objetivos.length;i++){
        await sql.query("insert into detalle_estructura (Comentario, puntuacion, progreso,estructuraIdestructura) values (?,?)",[objetivos[i], id])
    }
    req.flash("success","Exito al guardar")
     res.redirect('/estructura/listar/'+id);
}

//listar
estructuraCtl.listar = async(req,res) =>{
    const id = req.params.id
    const listaComentarios = await sql.query("select * from detalle_estructuras where estructuraIdestructura=?",[id])
    const lista = await sql.query("select * from estructuras where usuarioIdusuario=?",[id])
    res.render("estructura/estructura_listar",{lista,listaComentarios})
}

//traer datos
estructuraCtl.traer = async(req,res) =>{
    const id = req.params.id
    const listaComentarios = await sql.query("select * from detalle_estructuras where estructuraIdestructura=?",[id])
    const lista = await sql.query("select * from estructuras where iddatosproyecto=?",[id])
    res.render("estructura/estructura_editar",{lista,listaComentarios})
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
    for(let i=0 ; i<objetivos.length;i++){
        await sql.query("update detalle_estructuras set Comentarios=? where estructuraIdestructura=?",[comentarios[i], ids])
    }
    req.flash("success","Exito al guardar")
     res.redirect('/estructura/listar/'+id);
}

module.exports = estructuraCtl