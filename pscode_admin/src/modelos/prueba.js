const pruebas = (sequelize,type) => {
    return sequelize.define("pruebas",{
        idPruebas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: type.STRING(99),
        descripcion: type.STRING,
        calificacion: type.STRING,
        creacionPruebas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionPruebas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=pruebas