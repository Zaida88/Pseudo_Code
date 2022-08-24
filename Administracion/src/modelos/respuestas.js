const respuestas = (sequelize,type) => {
    return sequelize.define("respuestas",{
        idRespuestas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        respuesta: type.STRING(2500),
        creacionRespuestas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRespuestas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=respuestas