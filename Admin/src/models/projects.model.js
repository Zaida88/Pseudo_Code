const projects = (sequelize, type) => {
    return sequelize.define("projects", {
        idProject: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameProject: type.STRING,
        descriptionProject: type.STRING(1500),
        logoProject: type.STRING(),
        mission: type.STRING(1500),
        vision: type.STRING(1500),
        createdProject: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedProject: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = projects