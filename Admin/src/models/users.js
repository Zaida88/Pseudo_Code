const users = (sequelize,type) => {
    return sequelize.define("users",{
        id_user: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        fisrtName: type.STRING(100),
        lastName: type.STRING,
        username: type.STRING,
        password: type.STRING,
        photo: type.STRING,
        email: type.STRING,
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        update_at:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=users