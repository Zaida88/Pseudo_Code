
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')
const express = require("express")

const app = express();


const user = {}

//modulo de mostar 



user.show  = (req, res) => {
    res.render("user_profile/profile_view", {user})
};

user.get_user = async (req, res, ) => {
    const ids = req.params.id
    const User = await sql.query('select idUser, username, photo, password from users where idUser = ?', [ids])
    res.render('user_profile/profile_view', { User });
};

















