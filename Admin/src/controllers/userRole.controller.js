const userRoleCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

userRoleCtl.show = (req, res) => {
    res.render('userRoles/add')
}

userRoleCtl.send = async (req, res) => {
    const id = req.users.idUser
    const {idUser, idRol, idPermission} = req.body
    const newUserRole = {
      idUser,
      idRol,
      idPermission,
    }
    await orm.userRole.create(newUserRole)
    req.flash('success', 'Successfully saved')
     res.redirect('userRole/list' + id);
}

userRoleCtl.list = async (req, res) => {
    const list = await sql.query('select * from roles ro join userRoles us on ro.userRoles = us.id join permissions pe on ro.permissions = pe.id')
    res.render('userRole/list', {list})
}

userRoleCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.userRole.destroy({where: {iduserRol: id}})
    .then(() => {
        req.flash('success', 'successful removal')
        res.redirect('userRole/list' + id);
    })
}

userRoleCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from userRoles where iduserRol = ?', [id])
    res.render('userRole/edit', {list})
}

userRoleCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const {idUser, idRol, idPermission} = req.body
    const updatedUserRole = { 
      idUser,
      idRol,
      idPermission,
    }
    await orm.userRole.findOne({where: {iduserRol: ids}})
    .then(actualize => {
        actualize.update(updatedUserRole)
        req.flash('success', 'successfully upgraded')
        res.redirect('userRole/list' + id)
    })
}

module.exports = userRoleCtl