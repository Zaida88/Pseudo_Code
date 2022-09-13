const roles = (sequelize, type) => {
    return sequelize.define("roles", {
        idRol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameRol: type.STRING,
        createdRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },
        {
            timesTamps: false,
        })
}
module.exports = roles