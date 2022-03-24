const pruebaCtl = {};
const orm = require("../configuracion_bd/bd_orm")
const sql = require("../configuracion_bd/bd_sql");

//mostrar
pruebaCtl.mostrar = async(req, res) => {
    res.render("prueba/prueba_agregar")
};

//ingresar
pruebaCtl.enviar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre, descripcion,objetivos} = req.body
    const nuevaPrueba= {
        nombre, 
        descripcion, 
        usuarioIdusuario: id
    }
    await orm.prueba.create(nuevaPrueba)

    for(let i=0 ; i<objetivos.length;i++){
        await sql.query("insert into detalle_pruebas (preguntas,pruebaIdPruebas) values (?,?)",[objetivos[i], id])
    }
    req.flash("success","Exito al guardar")
    res.redirect('/prueba/listar/'+id);
}

//lista 1
pruebaCtl.listar1 = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from pruebas where usuarioIdusuario=?",[id])
    res.render("prueba/prueba_listar",{lista})
}

//lista 2
pruebaCtl.listar2 = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from detalle_pruebas where pruebaIdPruebas=?",[id])
    res.render("prueba/prueba_listar",{lista})
}

//lista 3
pruebaCtl.listar3 = async(req,res) =>{
    const id = req.params.id
    const lista1 = await sql.query("select * from pruebas where usuarioIdusuario=?",[id])
    const lista2 = await sql.query("select * from detalle_pruebas")
    const lista3 = await sql.query("select * from respuestas")
    res.render("prueba/prueba_listar",{lista1,lista2,lista3})
}

//traer datos
pruebaCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista = await sql.query("select * from pruebas where idprueba=?",[id])
    res.render("prueba/prueba_editar",{lista})
}

//actualizar
pruebaCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const ids = req.params.id
    const {nombre, descripcion, idprueba} = req.body
    const nuevaPrueba = {
        nombre, 
        descripcion, 
    }
    await orm.prueba.findOne({where:{idprueba:idprueba}})
    .then(actualizacion=>{
        actualizacion.update(nuevaPrueba)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/prueba/listar/'+id);
}

module.exports = pruebaCtl