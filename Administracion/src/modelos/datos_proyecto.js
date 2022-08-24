const datos_proyecto = (sequelize,type) => {
    return sequelize.define("datos_proyecto",{
        iddatosproyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre_pro: type.STRING,
        descripcion: type.STRING(1500),
        mision: type.STRING(1500),
        vision: type.STRING(1500),
        creaciondatos_proyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondatos_proyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=datos_proyecto