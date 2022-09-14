const recover_passwords = (sequelize, type) => {
    return sequelize.define("recover_passwords", {
        idRecoverPassword: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        endTime: type.STRING,
        newPassword: type.STRING,
        startTime: type.STRING,
        state: type.BOOLEAN,
        temporaryCode: type.STRING,
    }, {
        timestamps: false,
    })
}
module.exports = recover_passwords