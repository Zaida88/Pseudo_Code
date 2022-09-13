const projects = (sequelize,type) => {
    return sequelize.define("projects",{
        id_project: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        id_user: {
            type: type.INTEGER,
        },
        name: type.STRING,
        description: type.STRING(1500),
        logo: type.STRING(),
        mission: type.STRING(1500),
        vision: type.STRING(1500),
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
module.exports=projects