const exerciseCtl = {}

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')

exerciseCtl.show = (req, res) => {
    res.render('exercise/create')
}

exerciseCtl.send = async (req, res) => {
    const id = req.users.idUser
    const {nameExercise, descriptionExercise, punctuationExercise} = req.body
    const newExercise = {
        nameExercise,
        descriptionExercise,
        punctuationExercise,
    }
    await orm.exercise.create(newExercise)
    req.flash('Exitoso', 'Se creo exitosamente')
     res.redirect('exercise/list' + id);
}

exerciseCtl.list = async (req, res) => {
    const list = await sql.query('select * from exercises')
    res.render('exercise/list', {list})
}

exerciseCtl.remove = async (req, res) => {
    const id =  req.params.id
    await orm.exercise.destroy({where: {idExercise: id}})
    .then(() => {
        req.flash('Exitoso', 'Se elimino exitosamente')
        res.redirect('exercise/list' + id);
    })
}

exerciseCtl.get = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from exercises where idExercise = ?', [id])
    res.render('exercise/edit', {list})
}

exerciseCtl.edit = async (req, res) => {
    const id = req.users.idUser
    const ids = req.params.id
    const {nameExercise, descriptionExercise, punctuationExercise} = req.body
    const updatedExercise = { 
        nameExercise,
        descriptionExercise,
        punctuationExercise,
    }
    await orm.exercise.findOne({where: {idExercise: ids}})
    .then(actualize => {
        actualize.update(updatedExercise)
        req.flash('Exitoso', 'Se actualizo exitosamente')
        res.redirect('exercise/list' + id)
    })
}

module.exports = exerciseCtl