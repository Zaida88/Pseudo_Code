const encodings = (sequelize,type) => {
    return sequelize.define("encodings",{
        idencodings: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: type.STRING(100),
        description: type.STRING,
        image: type.STRING,
        creationencodings:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateencodings:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=encodings