const classifications = (sequelize, type) => {
    return sequelize.define("classifications", {
        idClassification: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameClassification: type.STRING,
        descriptionClassification: type.STRING,
        imageClassification: type.STRING,
        createdClassification: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updatedClassification: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = classifications