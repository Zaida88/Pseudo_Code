const passport = require("passport");

const sql= require('../configuracion_bd/bd_sql')

const loginCtl = {};

//login
loginCtl.mostrar = async(req, res) => {
    const ids = req.params.id
    const usuario = await sql.query("select * from usuarios where idusuario=?",[ids])
    res.render("login/login",{usuario})
};

loginCtl.login = passport.authenticate("local.signin",{
    successRedirect: "/proyecto/agregar/",
    failureRedirect: "/login",
    failureFlash: true
})

//registro
loginCtl.mostrarRegistro = (req, res) => {
    res.render("login/registro")
};

loginCtl.registro = passport.authenticate("local.signup",{
    successRedirect: "/CerrarSecion",
    failureRedirect: "/registro",
    failureFlash: true
})

//cerrar sesion
loginCtl.cerrar = (req, res,next) => {
    req.logOut()
    res.redirect("/")
};

module.exports = loginCtl