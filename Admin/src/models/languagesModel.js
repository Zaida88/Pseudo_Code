const languages = (sequelize, type) => {
    return sequelize.define("languages", {
        idLanguage: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameLanguage: type.STRING,
        descriptionLanguage: type.STRING,
        imageLanguage: type.STRING,
        createdLanguage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updatedLanguage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}
module.exports = languages