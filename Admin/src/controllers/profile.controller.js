
const userProfileViewCtl = {}
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')


//modulo de mostar 


userProfileViewCtl.showUserProfile  = (req, res) => {
    res.render("./userProfile/profileView")
};

userProfileViewCtl.fetchData = async (req, res, ) => {
    const id =req.user.idUser; 
    const User = await sql.query('select idUser, username, photo, password from users where idUser = ?', [id])
    res.render("/userProfile/profileView");
  
};

module.exports = userProfileViewCtl;
















