const permissionCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

permissionCtl.show = (req, res) => {
    res.render('permissions/add')
}

permissionCtl.send = async (req, res) => {
    const id = req.users.idUser
    const {namePermission} = req.body
    const newPermission = {
        namePermission,
    }
    await orm.permission.create(newPermission)
    req.flash('success', 'Successfully saved')
     res.redirect('permission/list' + id);
}

permissionCtl.list = async (req, res) => {
    const list = await sql.query('select * from permissions')
    res.render('permission/list', {list})
}

permissionCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.permission.destroy({where: {idpermission: id}})
    .then(() => {
        req.flash('success', 'successful removal')
        res.redirect('permission/list' + id);
    })
}

permissionCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from permissions where idpermission = ?', [id])
    res.render('permission/edit', {list})
}

permissionCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const {namePermission} = req.body
    const updatedPermission = { 
        namePermission,
    }
    await orm.permission.findOne({where: {idpermission: ids}})
    .then(actualize => {
        actualize.update(updatedPermission)
        req.flash('success', 'successfully upgraded')
        res.redirect('permission/list' + id)
    })
}

module.exports = permissionCtl