const photoUser = require("photo");

const sql= require('../configuracion_bd/bd_sql')

const menu = {};

menu.user = (req, res, next) => {
  res.render('../views/partials/menu.hbs');
}











module.exports = menu;