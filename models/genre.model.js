module.exports = (sequelize, type) => {
    return sequelize.define('generos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: type.STRING(500),
        name: type.STRING(50),
    }, {
            sequelize,
            timestamps: false,
        }
    );
};