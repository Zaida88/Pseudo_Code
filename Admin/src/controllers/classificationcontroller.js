const classificationCtl ={};

const orm = require("../databaseConfiguration/db_orm")
const sql = require("../databaseConfiguration/db_sql")

//mostrar
classificationCtl.show = (req, res) => {
    res.render("classification/classificationadd")
};

//ingresar
classificationCtl.send = async(req,res) =>{
    const id = req.user.idusuario
    const {nameClassification, descriptionClassification,imageClassification} = req.body
    const newClassification= {
        nameClassification, 
        descriptionClassification,
        imageClassification, 
        userIduser: id
    }
    await orm.classifications.create(newClassification)
    .then(() => {
    req.flash("success","Exito al guardar")
     res.redirect('/classifications/list/'+id);
    })
}


//DELETE
classificationCtl.delet= async(req,res)=>{
    const {id} = req.params;
    await pool.query('DELETE FROM classifications WHERE idclasificacion = ?', [id]);
    res.redirect('classification/delete');
};


//listar
classificationCtl.list = async(req,res) =>{
    const list = await sql.query("select * from classifications")
    res.render("classification/classificationlist",{list})
}

//traer datos
classificationCtl.bring = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from classifications where idclasificacion=?",[id])
    res.render("classification/classificationedit",{list})
}

//actualizar
classificationCtl.update=async(req,res)=>{
    const id=req.params.id
    const ids=req.user.idUser
    const {nameClassification, descriptionClassification,imageClassification}=req.body
    const newClassification={
        nameClassification, 
        descriptionClassification,
        imageClassification,
    }
    await  orm.classifications.findOne({where: {idClassification: id}})
    .then(updateClassification=>{
        updateClassification.update(newClassification)
    })
        
    req.flash("success","guardado exitosamente")
    res.redirect("/classifications/list/"+ids)
}

module.exports = classificationCtl
