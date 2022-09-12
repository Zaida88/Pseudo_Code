const user_roles = (sequelize,type) => {
    return sequelize.define("user_roles", {
        id_user_roles: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        creted_at: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },
    {
        timesTamps: false,
    })
}
module.exports= user_roles