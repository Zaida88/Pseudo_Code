const exerciseCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

exerciseCtl.show = (req, res) => {
    res.render('exercise/create')
}

exerciseCtl.create = async (req, res) => {
    const { nameExercise, descriptionExercise, punctuationExercise } = req.body
    const newExercise = {
        nameExercise,
        descriptionExercise,
        punctuationExercise,
    }
    await orm.exercises.create(newExercise)
    req.flash('success', 'Se creó exitosamente')
    res.redirect('/exercise/list');
}

exerciseCtl.list = async (req, res) => {
    const list = await sql.query('select * from exercises')
    res.render('exercise/list', { list })
}

exerciseCtl.detail = async (req, res) => {
    const id = req.params.id
    const exercise = await sql.query('SELECT * FROM exercises WHERE idExercise = ?', [id])
    res.render('exercise/detail', { exercise })
}

exerciseCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE FROM exercises WHERE idExercise = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/exercise/list');
}

exerciseCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const { nameExercise, descriptionExercise, punctuationExercise } = req.body
    const updatedExercise = {
        nameExercise,
        descriptionExercise,
        punctuationExercise,
    }
    await orm.exercise.findOne({ where: { idExercise: ids } })
        .then(actualize => {
            actualize.update(updatedExercise)
            req.flash('success', 'Se actualizo exitosamente')
            res.redirect('exercise/list' + id)
        })
}

module.exports = exerciseCtl