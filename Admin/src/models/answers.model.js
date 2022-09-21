const answers = (sequelize, type) => {
    return sequelize.define("answers", {
        idAnswer: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        answer: type.STRING(5000),
        createdAnswer: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAnswer: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = answers