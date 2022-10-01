const answer = (sequelize, type) => {
    return sequelize.define("answer", {
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
module.exports = answer