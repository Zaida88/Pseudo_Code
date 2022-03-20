const detalle_proyecto = (sequelize,type) => {
    return sequelize.define("detalle_proyecto",{
        idproyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        objetivos: type.STRING(1500),
        creaciondetalle_proyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondetalle_proyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=detalle_proyecto