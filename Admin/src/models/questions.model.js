const question = (Sequelize, type) => {
    return Sequelize.define("question", {
        idQuestion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question: type.STRING(5000),
        createdQuestion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updatedQuestion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timesTamps: false,
    })
}
module.exports = question