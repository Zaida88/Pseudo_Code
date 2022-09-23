
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const user = {}
user.get_user = async (req, res, next) => {
    const ids = req.params.id
    const User = await sql.query('select idUser, username, photo, password from users where idUser = ?', [ids])
    res.render('user_profile/profile_view', { User });
};

module.exports = user;





