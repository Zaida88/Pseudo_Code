const userAssignmentCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

userAssignmentCtl.show = (req, res) => {
    const id = req.params.id
    res.render('userAssignment/create')
}

userAssignmentCtl.create = async (req, res) => {
    const id = req.params.id
    const {firstName, lastName, username, password, photo, email} = req.body
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
    res.redirect('/userAssignment/list/' + id);
}

userAssignmentCtl.list = async (req, res) => {
    const list = await sql.query('SELECT firstName, nameRol, namePermission FROM users u JOIN roles r ON u.idUser = r.idRol JOIN permissions p ON u.idUser = p.idPermission')
    res.render('userAssignment/list', {list})
}

userAssignmentCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.user.destroy({where: {idUser: id}})
    .then(() => {
        req.flash('success', 'successful removal')
        res.redirect('userAssignment/list' + id);
    })
}

userAssignmentCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from users where idUser = ?', [id])
    res.render('userAssignment/edit', {list})
}

userAssignmentCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const {firstName, lastName, username, password, photo, email} = req.body
    const updatedUser = { 
        firstName, 
        lastName, 
        username, 
        password, 
        photo, 
        email,
    }
    await orm.user.findOne({where: {iduser: ids}})
    .then(actualize => {
        actualize.update(updatedUser)
        req.flash('success', 'successfully upgraded')
        res.redirect('userAssignment/list' + id)
    })
}

module.exports = userAssignmentCtl