
const userEditCtl = {}
const sql = require('../databaseConfiguration/db_sql')  //mandar 
const orm = require('../databaseConfiguration/db_orm')  //eliminar actualisar 


userEditCtl.showUserProfileEdit  = (req, res) => {
    res.render("./user_profile/profileEdit")
};


userEditCtl.toUpdate = async (req ,res )=>{
  const id =req.user.idUser; 
  const ids =req.params.id; 
const {userName, userEmail,password,userRol , sampleFlie} =req.body
const newShipmentv= {
  userName,
  userEmail,
  
  sampleFlie,
  password
}
await orm.clients.findOne({where:{idUser: ids}})
.then(toUpdate =>{
  toUpdate.update(newShipmentv)
})
req.flash("success","guardado");
res.redirect("/user_profile/profile"+id)
}

module.exports = userEditCtl;


