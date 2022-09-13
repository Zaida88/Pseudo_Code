const objectives = (sequelize,type) => {
    return sequelize.define("objectives",{
        id_objective: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        id_project: {
            type: type.INTEGER,
        },
        objective: type.STRING,
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=objectives