
const userProfileViewCtl = {}
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')


//modulo de mostar 


userProfileViewCtl.showUserProfile  = (req, res) => {
    res.render("./user_profile/profileView")
};

userProfileViewCtl.fetchData = async (req, res, ) => {
    const id =req.user.idUser; 
    const User = await sql.query('select idUser, username, photo, password from users where idUser = ?', [id])
    res.render("/user_profile/profileView");
  
};

module.exports = userProfileViewCtl;
















