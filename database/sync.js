const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

const CharactersModel = require('../models/characters.model');
const MoviesModel = require('../models/movies.model');
const GenreModel = require('../models/genre.model');
const MoviesGenreModel = require('../models/movies_genre.model');
const MoviesCharactersModel = require('../models/movies_characters.model');

const Characters = CharactersModel(sequelize, Sequelize);
const Movies = MoviesModel(sequelize, Sequelize);
const Genres = GenreModel(sequelize, Sequelize);
const MoviesGenre = MoviesGenreModel(sequelize, Sequelize);
const MoviesCharacters = MoviesCharactersModel(sequelize, Sequelize);

// Relations
MoviesCharacters.belongsTo(Movies, {foreignKey: 'id_movies'});
MoviesCharacters.belongsTo(Characters, {foreignKey: 'id_characters'});

MoviesGenre.belongsTo(Movies, {foreignKey: 'id_movies'});
MoviesGenre.belongsTo(Genres, {foreignKey: 'id_genre'});

// Sync Database
sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');
});

module.exports = {
    Characters,
    Movies,
    Genres,
    MoviesGenre,
    MoviesCharacters
};