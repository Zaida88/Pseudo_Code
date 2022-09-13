const users = (sequelize, type) => {
    return sequelize.define("users", {
        idUser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fisrtName: type.STRING,
        lastName: type.STRING,
        username: type.STRING,
        password: type.STRING,
        photo: type.STRING,
        email: type.STRING,
        createdUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = users