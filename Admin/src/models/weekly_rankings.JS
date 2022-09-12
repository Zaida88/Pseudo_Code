const weekly_rankings = (sequelize, type) => {
    return sequelize.define("weekly_rankings", {
        id_weekly_ranking: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        end_date: type.STRING,
        start_date: type.STRING,
    }, {
        timestamps: false,
    })
}
module.exports = weekly_rankings