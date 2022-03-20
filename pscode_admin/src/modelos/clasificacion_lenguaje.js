const clasificacion_lenguaje = (sequelize,type) => {
    return sequelize.define("clasificacion_lenguaje",{
        idclasificacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre_clasificacion: type.STRING,
        creacionclasificacion_lenguaje:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionclasificacion_lenguaje:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=clasificacion_lenguaje