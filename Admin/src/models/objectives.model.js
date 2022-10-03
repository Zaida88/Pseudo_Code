
const objectives = (sequelize, type) => {
    return sequelize.define("objectives", {
        idObjective: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        objective: type.STRING,
        createdObjective: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedObjective: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = objectives
