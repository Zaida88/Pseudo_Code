const clients = (sequelize, type) => {
    return sequelize.define("clients", {
        id_client: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        birthday: type.STRING,
        email: type.STRING,
        firstName: type.STRING,
        lastName: type.STRING,
        password: type.STRING,
        photo: type.STRING,
        username: type.STRING,
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = clients