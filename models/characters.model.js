module.exports = (sequelize, type) => {
    return sequelize.define('Characters', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: type.STRING(500),
        name: type.STRING(50),
        age: type.INTEGER,
        weight: type.FLOAT(6, 2),
        history: type.STRING(500),
    }, {
            sequelize,
            timestamps: false,
        }
    );
};