const user = {};

const passport = require('passport');
const sequelize = require('sequelize')

const sql = require('../configuracionBaseDatos/baseDatos.sql')
const orm = require('../configuracionBaseDatos/baseDatos.orm')



user.Regg = passport.authenticate('local.signup', {
    successRedirect: '/CloseSecsion',
    failureRedirect: '/Reggister',
    failureFlash: true
});
/*
registro.view_user = async (req, res, next) => {
    const ids = req.params.id
    const User = await sql.query('select  idUser, fisrtName,  photo from usuarios where idUsuarios = ?', [ids])
   // res.render('Usuario/Login', { user });
};*/



Regg.close_secsion = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Sección terminada');
        res.redirect('/');
    });
};

module.exports = Regg;