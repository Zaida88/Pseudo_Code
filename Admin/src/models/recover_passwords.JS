const recover_passwords = (sequelize,type) => {
    return sequelize.define("recover_passwords",{
        id_recover_password : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        new_password : type.STRING,
        state : type.BOOLEAN,
        start_time : type.STRING,
        end_time : type.STRING,
        temporary_code : type.STRING,
    },{
        timestamps: false,
    })
}
module.exports=recover_passwords