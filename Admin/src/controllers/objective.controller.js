project.remove = async (req, res) => {
    const id =  req.params.id
    await orm.projects.destroy({where: {idProject: ids}})
    .then(() => {
        req.flash('success', 'Guardado')
        res.redirect('/project/list' + id);
    })
}