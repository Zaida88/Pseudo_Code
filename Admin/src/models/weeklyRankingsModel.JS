const weekly_rankings = (sequelize, type) => {
    return sequelize.define("weekly_rankings", {
        idWeeklyRanking: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        endDate: type.STRING,
        startDate: type.STRING,
    }, {
        timestamps: false,
    })
}
module.exports = weekly_rankings