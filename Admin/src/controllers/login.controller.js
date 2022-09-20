const login = {};

const passport = require('passport');
const sequelize = require('sequelize')

const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')

login.showRegistration = async (req, res) => {
    const user = await sql.query('SELECT COUNT(*) AS total FROM users')
    console.log(user[0].total)
    if (user[0].total === 0) {
        res.render('user/registration', { user });
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
    res.render('user/login', { User });
};

login.login = passport.authenticate('local.signin', {
    successRedirect: '/dashboard/dashboard',
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