const indexCtl = {};

const sql= require('../configuracion_bd/bd_sql')
const orm= require('../configuracion_bd/bd_orm')

indexCtl.mostrar = (req, res) => {
    res.render("index")
};

indexCtl.verificar = async (req, res) => {
    const {username} = req.body
    const usuario = await orm.usuarios.findOne({where: {username:username}})
    if(usuario){
        const usuarios = usuario
        if(usuarios.username===null){
            done(null, false, req.flash("success", "No tiene cuenta con este correo, usted será redirigido a Registro."));
        }else{
             res.redirect('/login/'+ usuarios.idusuario);
        }
    }else{
        res.redirect('/registro')
    }    
}

module.exports = indexCtl