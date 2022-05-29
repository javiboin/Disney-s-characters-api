module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(500),
        password: type.STRING(50),
    }, {
            sequelize,
            timestamps: false,
        }
    );
};