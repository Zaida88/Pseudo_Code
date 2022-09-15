const menu = {};

menu.user = (req, res, next) => {
  res.render('../views/partials/menu.hbs');
}

module.exports = menu;