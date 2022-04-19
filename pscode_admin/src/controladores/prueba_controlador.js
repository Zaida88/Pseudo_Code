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
    const prueba = await sql.query("select * from pruebas where idPruebas=?",[id])
    const lista1 = await sql.query("select * from detalle_pruebas where pruebaIdPruebas=?",[id])
    res.render("prueba/prueba_preguntas",{ lista1,prueba })
}

//lista 3
pruebaCtl.listar3 = async(req,res) =>{
    const id = req.params.id
    const prueba = await sql.query("select * from pruebas where pruebas=?",[id])
    res.render("prueba/prueba_agregarPreguntas",{prueba})
}

//ingresar pregunta
pruebaCtl.enviarPregunta = async(req,res) =>{
    const id = req.params.id
    const {preguntas} = req.body
    const nuevaPregunta= {
        preguntas, 
        idDetallePruebas: id
    }
    await orm.detalle_prueba.create(nuevaPregunta)
    req.flash("success","Exito al guardar")
    res.redirect('/prueba/listar/'+id);
}

   

pruebaCtl.mostrarRespuesta = async(req, res) =>{
    const id = req.params.id
    const preguntaid = await sql.query('select * from detalle_pruebas where idDetallePruebas = ?', [id])
    res.render("prueba/prueba_respuestas", {preguntaid})
}

pruebaCtl.respuestas = async(req, res) =>{
    const id = req.params.id
    const ids = req.user.idusuario
    const {objetivos} = req.body
    for(let i=0 ; i<objetivos.length;i++){
        await sql.query("insert into respuestas (respuesta,detallePruebaIdDetallePruebas) values (?,?)",[objetivos[i], id])
    }
    req.flash("success","Exito al guardar")
    res.redirect('/prueba/lista_completa/'+ids);
}

//lista 3
pruebaCtl.listar3 = async(req,res) =>{
    const id = req.params.id
    const lista1 = await sql.query("select distinct nombre, descripcion from prueba where usuarioIdusuario=?",[id])
    const lista2 = await sql.query("select distinct preguntas from prueba where usuarioIdusuario=?",[id])
    const lista3 = await sql.query("select distinct respuesta from prueba where usuarioIdusuario=?",[id])
    res.render("prueba/prueba",{lista1, lista2, lista3})
}

//traer datos
pruebaCtl.traer = async(req,res) =>{
    const id = req.params.id
    const lista1 = await sql.query("select distinct idPruebas, nombre, descripcion from prueba where idPruebas=?",[id])
    const lista2 = await sql.query("select distinct idDetallePruebas, preguntas from prueba where usuarioIdusuario=?",[id])
    const lista3 = await sql.query("select distinct idRespuestas, respuesta from prueba where usuarioIdusuario=?",[id])
    res.render("prueba/prueba_editar",{lista1, lista2, lista3})
}

//actualizar
pruebaCtl.actualizar = async(req,res) =>{
    const id = req.user.idusuario
    const {nombre, descripcion, idprueba, idDetallePruebas, preguntas, idRespuestas, respuesta} = req.body
    const nuevaPrueba = {
        nombre, 
        descripcion, 
    }
    await orm.prueba.findOne({where:{idprueba:idprueba}})
    .then(actualizacion=>{
        actualizacion.update(nuevaPrueba)
    })
    for(let i = 0; i<preguntas.length; i++){
        await sql.query('update detalle_pruebas set idDetallePruebas = ?, preguntas = ?', [idDetallePruebas[i], preguntas[i]])
    }
    for(let i = 0; i<respuesta.length; i++){
        await sql.query('update respuestas set idRespuestas = ?, respuesta = ?', [idRespuestas[i], respuesta[i]])
    }
    req.flash("success","Exito al guardar")
     res.redirect('/prueba/listar/'+id);
}

module.exports = pruebaCtl