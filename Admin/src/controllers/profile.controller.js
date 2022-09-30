
const userProfileViewCtl = {}
const sql = require('../databaseConfiguration/db_sql')
const orm = require('../databaseConfiguration/db_orm')


//modulo de mostar 


userProfileViewCtl.showUserProfile  = async (req, res) => {
    const id =req.params.id; 
    const User = await sql.query('select * from users where idUser = ?', [id])
    res.render("./userProfile/profileView",{User}) 
};


userProfileViewCtl.showUserProfileEdit  = async (req, res) => {
    const id =req.params.id; 
    const User = await sql.query('select * from users where idUser = ?', [id])
    res.render("./userProfile/profileEdit",{User}) 
};

userProfileViewCtl.toUpdate = async (req ,res )=>{
  const id =req.params.id; 
  
const {username,photo, email,password,lastName,firstName } =req.body
const newShipmentv= {
  username,
  email,
photo,
lastName,
firstName,
  password
}
await orm.users.findOne({where:{idUser: id}})
.then(toUpdate =>{
  toUpdate.update(newShipmentv)
})


res.redirect("/userProfile/profileView/"+id)


}



module.exports = userProfileViewCtl;
















