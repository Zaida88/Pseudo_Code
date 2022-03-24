const detalle_pruebas = (sequelize,type) => {
    return sequelize.define("detalle_pruebas",{
        idDetallePruebas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        preguntas: type.STRING,
        creacionDetallePruebas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetallePruebas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=detalle_pruebas