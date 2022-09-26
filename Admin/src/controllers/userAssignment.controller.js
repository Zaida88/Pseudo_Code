const userAssignmentCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

userAssignmentCtl.showUser = (req, res) => {
    const id = req.params.id
    res.render('userAssignment/createUser')
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
    const id = req.params.id
    const list = await sql.query('SELECT firstName, nameRol, namePermission FROM users u JOIN roles r ON u.idUser JOIN permissions p ON u.idUser')
    res.render('userAssignment/createAssignment')
}

userAssignmentCtl.createAssignment = async (req, res) => {
    const id = req.params.id
    const { nameExercise, descriptionExercise, punctuationExercise, codeIdCode } = req.body
    const newExercise = {
        nameExercise,
        descriptionExercise,
        punctuationExercise,
        codeIdCode: codeIdCode,
    }
    await orm.exercises.create(newExercise)
    req.flash('success', 'Se creó exitosamente')
    res.redirect('/exercise/listExercises/' + id);
}

userAssignmentCtl.list = async (req, res) => {
    const list = await sql.query('SELECT firstName, nameRol, namePermission FROM users u JOIN roles r ON u.idUser JOIN permissions p ON u.idUser')
    res.render('userAssignment/list', { list })
}

userAssignmentCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE FROM users WHERE idUser = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('userAssignment/list' + id);
}

userAssignmentCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from users where idUser = ?', [id])
    res.render('userAssignment/edit', { list })
}

userAssignmentCtl.edit = async (req, res) => {
    const id = req.params.id
    const { firstName, lastName, username, password, photo, email } = req.body
    const updatedUser = {
        firstName,
        lastName,
        username,
        password,
        photo,
        email,
    }
    await orm.users.findOne({ where: { idUser: id } })
        .then(actualize => {
            actualize.update(updatedUser)
            req.flash('success', 'successfully upgraded')
            res.redirect('userAssignment/list')
        })
}

module.exports = userAssignmentCtl