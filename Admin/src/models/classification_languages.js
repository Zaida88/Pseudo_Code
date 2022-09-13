const classification_languages = (sequelize,type) => {
    return sequelize.define("classification_languages",{
        idclassification_languages: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: type.STRING(100),
        description: type.STRING,
        image: type.STRING,
        creationclassification_languages:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateclassification_languages:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=classification_languages