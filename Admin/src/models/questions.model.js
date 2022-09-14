const questions = (Sequelize, type) => {
    return Sequelize.define("questions", {
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
        timestamps: false,
    })
}
module.exports = questions