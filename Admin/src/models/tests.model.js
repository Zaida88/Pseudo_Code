const tests = (sequelize, type) => {
    return sequelize.define("tests", {
        idTests: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameTests: type.STRING,
        descriptionTests: type.STRING,
        qualificationTests: type.STRING,
        createdTests: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updatedTests: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timesTamps: false,
    })
}
module.exports = tests
