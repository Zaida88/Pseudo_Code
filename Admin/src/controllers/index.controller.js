const indexCtrl = {};
const pool = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const CryptoJS = require('crypto-js')

indexCtrl.show = (req, res) => {
    res.render('index');
};

indexCtrl.send = async (req, res) => {
    await pool.query('CREATE VIEW IF NOT EXISTS max AS SELECT MAX(idUser) AS max FROM users')

    const { validate } = req.body
    const validation = await orm.users.findOne({ where: { username: validate } })
    if (validation) {
        const validations = validation
        if (validations.username !== null) {
            res.redirect('/login/' + validations.idUser);
        } else {
            res.flash('success', 'No existe un usuario con este nombre, porfavor registrese')
            res.redirect('/registration')
        }
    } else {
        res.redirect('/registration')
    }
}

module.exports = indexCtrl;