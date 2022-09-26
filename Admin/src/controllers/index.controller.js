const indexCtrl = {};
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const CryptoJS = require('crypto-js')

indexCtrl.show = (req, res) => {
    res.render('index');
};

indexCtrl.send = async (req, res) => {
    await sql.query('CREATE VIEW IF NOT EXISTS max AS SELECT MAX(idUser) AS max FROM users')
    await sql.query('CREATE VIEW IF NOT EXISTS dashboard AS SELECT (SELECT COUNT(*) from projects) AS project,(SELECT COUNT(*) from languages) AS language, (SELECT COUNT(*) from tests) AS test,  (SELECT COUNT(*) from exercises) AS exercise,   (SELECT COUNT(*) from users) AS user')

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