const passport = require("passport");

const loginCtl = {};

//login
loginCtl.mostrar = (req, res) => {
    res.render("login/login")
};

loginCtl.login = passport.authenticate("local.signin",{
    successRedirect: "/clasificacion/agregar/",
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