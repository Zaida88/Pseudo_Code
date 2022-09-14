const scores = (sequelize, type) => {
    return sequelize.define("scores", {
        idScore: {
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