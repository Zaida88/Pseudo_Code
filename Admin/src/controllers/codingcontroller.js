const codificacionCtl = {};
const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql");

//mostrar
codificacionCtl.show = async(req, res) => {
    const id = req.params.id
    const coding = await sql.query("select * from codes where idCode  = ?",[id])
    res.render("coding/codingadd",{coding})
};

//ingresar
codificacionCtl.send = async(req,res) =>{
    const id = req.user.iduser
    const {nameCode, descriptionCode, code,video} = req.body
    const newCode= {
        nameCode, 
        descriptionCode, 
        code,
        video,
        userIduser: id,
    }
    await orm.coding.create(newCode)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/coding/list/'+id);
    })
}

//listar
codificacionCtl.list = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from codes where idCode ")
    res.render("coding/codinglist",{list})
}

//traer datos
codificacionCtl.bring = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from codes where idCode =?",[id])
    res.render("coding/codingedit",{list})
}

//actualizar
codificacionCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {nameCode, descriptionCode, code,video} = req.body
    const newCode = {
        nameCode, 
        descriptionCode, 
        code,
        video,
    }
    await orm.coding.findOne({where:{idcode:idcode}})
    .then(update=>{
        update.update(newCode)
    })
    req.flash("success","Exito al guardar")
     res.redirect('/coding/list/'+id);
}

module.exports = codificacionCtl