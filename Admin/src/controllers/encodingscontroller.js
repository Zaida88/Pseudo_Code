const encodingsCtl = {};
const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql");

//mostrar
encodingsCtl.show = async(req, res) => {
    const id = req.params.id
    const encodings = await sql.query("select * from encodings where idencodings = ?",[id])
    res.render("encodings/encodings_add",{encodings})
};

//ingresar
encodingsCtl.Send = async(req,res) =>{
    const id = req.user.iduser
    const {name, description, encodings} = req.body
    const newencodings= {
        name, 
        description, 
        userIduser: id,
        encodingsLenguajeIdencodings:encodings
    }
    await orm.encodings.create(newencodings)
    .then(() => {
    req.flash("success","Save success")
     res.redirect('/encodings/list/'+id);
    })
}

//list
encodingsCtl.list = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from encodingss")
    res.render("encodings/encodings_list",{list})
}

//traer datos
encodingsCtl.traer = async(req,res) =>{
    const id = req.params.id
    const list = await sql.query("select * from encodingss where idencodings=?",[id])
    res.render("encodings/encodings_edit",{list})
}

//update
encodingsCtl.update = async(req,res) =>{
    const id = req.user.iduser
    const ids = req.params.id
    const {name, description, idencodings} = req.body
    const newencodings = {
        name, 
        description, 
    }
    await orm.encodings.findOne({where:{idencodings:idencodings}})
    .then(update=>{
        update.update(newencodings)
    })
    req.flash("success","Save success")
     res.redirect('/encodings/list/'+id);
}

module.exports = encodingsCtl