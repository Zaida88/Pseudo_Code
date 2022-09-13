const questions =(Sequelize,type) => {
    return Sequelize.define("questions",{
        idQuestions: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question:type.STRING(5000),
        createdQuestion:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        },
        updateQuestion: {
           type: 'TIMESTAMP',
           defaultValue: type.literal('CURRENT_TIMESTAMP '),
           allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports= questions