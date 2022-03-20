const estructura = (sequelize,type) => {
    return sequelize.define("estructura",{
        idestructura: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: type.STRING,
        descripcion: type.STRING(2500),
        codigo: type.STRING,
        creacionestructura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionestructura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=estructura