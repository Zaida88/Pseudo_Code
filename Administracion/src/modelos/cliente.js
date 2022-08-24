const cliente = (sequelize,type) => {
    return sequelize.define("cliente",{
        idcliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        username: type.STRING(99),
        password: type.STRING,
        edad: type.STRING(2),
        correo: type.STRING,
        nombre: type.STRING,
        apellido: type.STRING,
        creacioncliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacioncliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports=cliente