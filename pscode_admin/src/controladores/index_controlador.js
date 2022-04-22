const indexCtl = {};

const sql= require('../configuracion_bd/bd_sql')
const orm= require('../configuracion_bd/bd_orm')

indexCtl.mostrar = (req, res) => {
    res.render("index")
};

indexCtl.verificar = async (req, res) => {
    const clasificaciones = await sql.query("select * from clasificacion_lenguajes")
    if(clasificaciones.length==0){
        const clasificacion = clasificaciones[0]
        if(clasificacion===undefined){
            await sql.query("insert into clasificacion_lenguajes (nombre_clasificacion)values('Hipertexto')")
            await sql.query("CREATE VIEW prueba as SELECT p.*,d.*,r.* FROM pruebas p JOIN detalle_pruebas d ON d.pruebaIdPruebas=p.idPruebas JOIN respuestas r on r.detallePruebaIdDetallePruebas = d.idDetallePruebas")
            console.log("Vista creada")
        }else{
            console.log("Ya existe")
        }
    }
 
    const {username} = req.body
    const usuario = await orm.usuarios.findOne({where: {username:username}})
    if(usuario){
        const usuarios = usuario
        if(usuarios.username===null){
            done(null, false, req.flash("success", "No tiene cuenta con este usuario, usted será redirigido al registro."));
        }else{
             res.redirect('/login/'+ usuarios.idusuario);
        }
    }else{
        res.redirect('/registro')
    }    
}

module.exports = indexCtl