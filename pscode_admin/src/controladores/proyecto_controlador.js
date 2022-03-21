const proyectoCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql")

//mostrar
proyectoCtl.mostrar = (req, res) => {
    res.render("proyecto/proyecto_agregar")
};

//ingresar
proyectoCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre_pro, descripcion, mision, vision, objetivos} = req.body
    const nuevoProyecto = {
        nombre_pro, 
        descripcion, 
        mision, 
        vision, 
        usuarioIdusuario: id
    }
    await orm.datos_proyecto.create(nuevoProyecto)

    for(let i=0 ; i<objetivos.lengh;i++){
        await sql.query("insert into detalle_proyectos (objetivos,datosProyectoIddatosproyecto) values (?,?)",[objetivos[i], id])
    }
    req.flash("success","Exito al guardar")
     res.redirect('/proyecto/listar/'+id);
}

//listar
proyectoCtl.listar = async(req,res) =>{
    const id = req.params.id
    const listaObjetivos = await sql.query("select * from detalle_proyectos where datosProyectoIddatosproyecto=?",[id])
    const lista = await sql.query("select * from datos_proyectos where usuarioIdusuario=?",[id])
    res.render("proyecto/proyecto_listar",{lista,listaObjetivos})
}

//traer datos
proyectoCtl.traer = async(req,res) =>{
    const id = req.params.id
    const listaObjetivos = await sql.query("select * from detalle_proyectos where idproyecto=?",[id])
    const lista = await sql.query("select * from datos_proyectos where iddatosproyecto=?",[id])
    res.render("proyecto/proyecto_editar",{lista,listaObjetivos})
}

//actualizar
proyectoCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre_pro, descripcion, mision, vision, objetivos} = req.body
    const nuevoProyecto = {
        nombre_pro, 
        descripcion, 
        mision, 
        vision, 
        usuarioIdusuario: id
    }
    await orm.datos_proyecto.findOne({where:{iddatosproyecto:ids}})
    .then(actualizacion=>{
        actualizacion.update(nuevoProyecto)
    })
    for(let i=0 ; i<objetivos.lengh;i++){
        await sql.query("update detalle_proyectos (objetivos,datosProyectoIddatosproyecto) values (?,?)",[objetivos[i], id])
    }
    req.flash("success","Exito al guardar")
     res.redirect('/proyecto/listar/'+id);
}

module.exports = proyectoCtl