const roleCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

roleCtl.show = (req, res) => {
    res.render('roles/add')
}

roleCtl.send = async (req, res) => {
    const id = req.users.idUser
    const {nameRol} = req.body
    const newRole = {
        nameRol,
    }
    await orm.role.create(newRole)
    req.flash('success', 'Successfully saved')
     res.redirect('role/list' + id);
}

roleCtl.list = async (req, res) => {
    const list = await sql.query('select * from roles')
    res.render('role/list', {list})
}

roleCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.role.destroy({where: {idrole: id}})
    .then(() => {
        req.flash('success', 'successful removal')
        res.redirect('role/list' + id);
    })
}

roleCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from roles where idrole = ?', [id])
    res.render('role/edit', {list})
}

roleCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const {nameRol} = req.body
    const updatedRole = { 
        nameRol,
    }
    await orm.role.findOne({where: {idrole: ids}})
    .then(actualize => {
        actualize.update(updatedRole)
        req.flash('success', 'successfully upgraded')
        res.redirect('role/list' + id)
    })
}

module.exports = roleCtl