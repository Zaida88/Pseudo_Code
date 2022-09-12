const scores = (sequelize, type) => {
    return sequelize.define("scores", {
        id_score: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        score: type.INTEGER,
    }, {
        timestamps: false,
    })
}
module.exports = scores