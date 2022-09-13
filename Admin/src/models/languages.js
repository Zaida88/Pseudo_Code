const languages = (sequelize,type) => {
    return sequelize.define("languages",{
        idlanguages: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        iduser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        idclassification: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: type.STRING(100),
        description: type.STRING,
        image: type.STRING,
        creationlanguages:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatelanguages:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=languages