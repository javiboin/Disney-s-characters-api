const { Sequelize } = require('sequelize');
const { DB } = require('./config');

const sequelize = new Sequelize(DB.database, DB.user, DB.password, {
    host: DB.host,
    dialect: DB.dialect,
    logging: false,
    query: { raw: true }
});

const validar_conexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('La conexión a la base de datos se ha realizado correctamente');
    } catch (error) {
        console.log('Error al conectar con la base de datos: ', error);
    }
}

validar_conexion();

module.exports = { sequelize };