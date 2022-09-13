const classification = (sequelize,type) => {
    return sequelize.define("classification",{
        idclassification: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        iduser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: type.STRING(100),
        description: type.STRING,
        image: type.STRING,
        creationclassification:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateclassification:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=classification