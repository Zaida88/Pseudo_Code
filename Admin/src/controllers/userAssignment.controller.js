const userAssignmentCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

userAssignmentCtl.showUser = (req, res) => {
    res.render('userAssignment/createUser')
}
     
userAssignmentCtl.showUpdate = async (req, res) => {
    const id = req.params.id
    const assignment = await sql.query('SELECT * FROM user_roles us JOIN users u ON u.idUser = us.userIdUser JOIN roles r ON us.roleIdRol = r.idRol JOIN permissions p ON us.permissionIdPermission = p.idPermission where userIdUser = ?', [id])
    const permission = await sql.query('select * from permissions')
    res.render('userAssignment/update', { assignment, permission })
}

userAssignmentCtl.createUser = async (req, res) => {
    const id = req.params.id
    const { firstName, lastName, username, password, photo, email } = req.body
    const newUserAssignment = {
        firstName,
        lastName,
        username,
        password,
        photo,
        email,
    }
    await orm.users.create(newUserAssignment)
    req.flash('success', 'Se creó exitosamente')
    res.redirect('/userAssignment/list');
}

userAssignmentCtl.showAssignment = async (req, res) => {
    const users = await sql.query('Select * from users where not exists (select * from user_roles WHERE userIdUser = idUser )')
    const roles = await sql.query('select * from roles')
    const permissions = await sql.query('select * from permissions')
    res.render('userAssignment/createAssignment', {users, roles, permissions})
}

userAssignmentCtl.createAssignment = async (req, res) => {
    const {userIdUser, roleIdRol, permissionIdPermission} = req.body
    const newAssignment = {
        userIdUser: userIdUser,
        roleIdRol: roleIdRol,
        permissionIdPermission: permissionIdPermission,
    }
    await orm.userRoles.create(newAssignment)
    req.flash('success', 'Se creó exitosamente')
    res.redirect('/userAssignment/list');
}

userAssignmentCtl.list = async (req, res) => {
    const list = await sql.query('SELECT * FROM user_roles us JOIN users u ON u.idUser = us.userIdUser JOIN roles r ON us.roleIdRol = r.idRol JOIN permissions p ON us.permissionIdPermission = p.idPermission')
    res.render('userAssignment/list', { list })
}

userAssignmentCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE FROM user_roles WHERE userIdUser = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/userAssignment/list');
}

userAssignmentCtl.update = async (req, res) => {
    const id = req.params.id
    const { permissionIdPermission } = req.body
    const updatedAssignment = {
        permissionIdPermission
    }
    await orm.userRoles.findOne({ where: { userIdUser: id } })
        .then(update => {
            update.update(updatedAssignment)
            req.flash('success', 'Se actualizo exitosamente')
            res.redirect('/userAssignment/list')
        })
}

module.exports = userAssignmentCtl