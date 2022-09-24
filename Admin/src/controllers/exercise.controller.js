const exerciseCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

exerciseCtl.show = async (req, res) => {
    const id = req.params.id
    const codes = await sql.query('select * from codes where languageIdLanguage = ?', [id])
    const language = await sql.query('select * from languages where idLanguage = ?', [id])
    res.render('exercise/create', { codes, language })
}

exerciseCtl.showUpdate = async (req, res) => {
    const id = req.params.id
    const exercise = await sql.query('select * from exercise where idExercise = ?', [id])
    res.render('exercise/update', { exercise })
}

exerciseCtl.create = async (req, res) => {
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

exerciseCtl.listExercises = async (req, res) => {
    const id = req.params.id
    const listExercises = await sql.query('select * from exercise WHERE idLanguage = ?', [id])
    res.render('exercise/listExercises', { listExercises })
}

exerciseCtl.listLanguages = async (req, res) => {
    const listLanguages = await sql.query('select * from languages')
    res.render('exercise/listLanguages', { listLanguages })
}

exerciseCtl.detail = async (req, res) => {
    const id = req.params.id
    const exercise = await sql.query('SELECT * FROM exercise WHERE idExercise = ?', [id])
    res.render('exercise/detail', { exercise })
}

exerciseCtl.remove = async (req, res) => {
    const id = req.params.id
    await sql.query('DELETE FROM exercises WHERE idExercise = ?', [id])
    req.flash('success', 'Se eliminó exitosamente')
    res.redirect('/exercise/listLanguages');
}

exerciseCtl.update = async (req, res) => {
    const id = req.params.id
    const { nameExercise, descriptionExercise, punctuationExercise } = req.body
    const updatedExercise = {
        nameExercise,
        descriptionExercise,
        punctuationExercise,
    }
    await orm.exercises.findOne({ where: { idExercise: id } })
        .then(update => {
            update.update(updatedExercise)
            req.flash('success', 'Se actualizó exitosamente')
            res.redirect('/exercise/listLanguages')
        })
}

module.exports = exerciseCtl