const dashboardCtrl = {};
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const CryptoJS = require('crypto-js')

dashboardCtrl.show = (req, res) => {
    res.render('Dashboard/dashboard');
};

dashboardCtrl.list = async (req, res) => {
    const list = await sql.query('CREATE VIEW IF NOT EXISTS dashboard AS SELECT (SELECT COUNT(*) from projects) AS project,(SELECT COUNT(*) from languages) AS language, (SELECT COUNT(*) from tests) AS test,  (SELECT COUNT(*) from exercises) AS exercise,   (SELECT COUNT(*) from users) AS user;')
    res.render('Dashboard/dashboard', { list })
}

module.exports = dashboardCtrl;