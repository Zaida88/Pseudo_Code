const dashboardCtrl = {};
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const CryptoJS = require('crypto-js')

dashboardCtrl.show = async (req, res) => {
    const list = await sql.query('SELECT * FROM dashboard')
    res.render('dashboard/dashboard', { list })
};

module.exports = dashboardCtrl;