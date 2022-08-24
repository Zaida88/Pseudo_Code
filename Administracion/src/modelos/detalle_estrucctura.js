const detalle_estructura = (sequelize,type) => {
    return sequelize.define("detalle_estructura",{
        iddetalleestructura: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        comentario: type.STRING(1500),
        puntuacion: type.STRING,
        progreso: type.STRING,
        creaciondetalle_estructura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondetalle_estructura:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=detalle_estructura