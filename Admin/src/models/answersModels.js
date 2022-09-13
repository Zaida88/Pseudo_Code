const answers = (sequelize,type) => {
    return sequelize.define("answers",{
        idAnswers: {
            type: type.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        },
        answers: type.STRING(5000),
        createAnswers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateAnswers:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false   
        }
        },{
            timestamps: false,
    })
}
module.exports= answers