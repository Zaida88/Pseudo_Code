const permissions = (sequelize, type) => {
    return sequelize.define("permissions", {
        idPermission: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        namePermission: type.STRING,
        createdPermission: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedPermission: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },
        {
            timesTamps: false,
        })
}
module.exports = permissions