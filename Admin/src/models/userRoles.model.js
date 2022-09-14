const user_roles = (sequelize, type) => {
    return sequelize.define("user_roles", {
        idUserRol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        createdUserRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedUserRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },
        {
            timesTamps: false,
        })
}
module.exports = user_roles