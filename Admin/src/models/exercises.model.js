const exercises = (sequelize, type) => {
    return sequelize.define("exercises", {
        idExercise: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameExercise: type.STRING,
        descriptionExercise: type.STRING,
        punctuationExercise: type.INTEGER,
        createdExercise: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedExercise: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },
        {
            timesTamps: false,
        })
}
module.exports = exercises