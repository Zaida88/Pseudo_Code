const login = {};

const passport = require('passport');
const sequelize = require('sequelize')

const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')

login.showRegistration = async (req, res) => {
    const user = await sql.query('select max(idUser) AS max from users')
    console.log("variable"+user.max)
    if (user.max) {
        res.render('User/registration', { user });
    } else {
        res.redirect('/')
    }
};

login.registration = passport.authenticate('local.signup', {
    successRedirect: '/logout',
    failureRedirect: '/registration',
    failureFlash: true
});

login.showLogin = async (req, res, next) => {
    const ids = req.params.id
    const User = await sql.query('select idUser, username, photo from users where idUser = ?', [ids])
    res.render('User/Login', { User });
};

login.login = passport.authenticate('local.signin', {
    successRedirect: '/User/dashboard/',
    failureRedirect: '/',
    failureFlash: true
})

login.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Sesión finalizada');
        res.redirect('/');
    });
};

module.exports = login;