const roles = (sequelize,type) => {
    return sequelize.define("roles", {
        id_rol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: type.STRING,
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
module.exports= roles