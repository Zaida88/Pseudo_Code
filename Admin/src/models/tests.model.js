const tests = (sequelize, type) => {
    return sequelize.define("tests", {
        idTest: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameTest: type.STRING,
        descriptionTest: type.STRING,
        qualificationTest: type.STRING,
        createdTest: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updatedTest: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = tests