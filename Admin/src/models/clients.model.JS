const clients = (sequelize, type) => {
    return sequelize.define("clients", {
        idClient: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        birthDay: type.STRING,
        email: type.STRING,
        firstName: type.STRING,
        lastName: type.STRING,
        password: type.STRING,
        photo: type.STRING,
        username: type.STRING,
        createdClient: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedClient: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = clients