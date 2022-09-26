
const sql = require('../databaseConfiguration/db_sql')  //mandar 
const orm = require('../databaseConfiguration/db_orm')  //eliminar actualisar 





const userEdit = {}





userEdit.show  = (req, res) => {
    res.render("/user_profile/profile_edit")
};


userEdit.act = async (req ,res )=>{
  const id =req.user.idUser; 
  const ids =req.params.id; 
const {user_name, user_email,password,user_rol , sampleFlie} =req.body
const new_env = {
  user_name,
  user_email,
  user_rol,
  sampleFlie,
  password
}
await orm.clients.findOne({where:{idUser: ids}})
.then(act =>{
  act.update(new_env)
})
req.flash("success","guardado");
res.redirect("/user_profile/profile_view"+id)
}



