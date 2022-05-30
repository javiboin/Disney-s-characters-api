module.exports = (sequelize, type) => {
    return sequelize.define('Movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: type.STRING(500),
        title: type.STRING(50),
        created: type.DATE,
        rating: type.INTEGER,
    }, {
            sequelize,
            timestamps: false,
        }
    );
};