const codes = (sequelize, type) => {
    return sequelize.define("codes", {
        idCode: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameCode: type.STRING(100),
        descriptionCode: type.STRING,
        code: type.STRING,
        video: type.STRING,
        createdCode: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedCode: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = codes