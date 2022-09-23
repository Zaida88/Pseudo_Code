
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const user = require("../models/users.model")

module.exports= {

profile:function(req ,res){

user.query('select idUser, username, photo from users where idUser = ?', [ids])

}



}