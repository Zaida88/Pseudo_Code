const recover_passwords = (sequelize, type) => {
    return sequelize.define("recover_passwords", {
        id_recover_password: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        end_time: type.STRING,
        new_password: type.STRING,
        start_time: type.STRING,
        state: type.BOOLEAN,
        temporary_code: type.STRING,
    }, {
        timestamps: false,
    })
}
module.exports = recover_passwords