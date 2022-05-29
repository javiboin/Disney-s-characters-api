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
        weight: type.FLOAT(6, 2),
        history: type.STRING(500),
    }, {
            sequelize,
            timestamps: false,
        }
    );
};