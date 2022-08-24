const codificacion = (sequelize,type) => {
    return sequelize.define("codificacion",{
        idcodificacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: type.STRING,
        descripcion: type.STRING(1500),
        creacioncodificacion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacioncodificacion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=codificacion