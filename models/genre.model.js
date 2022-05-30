module.exports = (sequelize, type) => {
    return sequelize.define('Genres', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING(50),
        image: type.STRING(500)
    }, {
            sequelize,
            timestamps: false,
        }
    );
};