module.exports = (sequelize, type) => {
    return sequelize.define('MoviesCharacters', {
        id_movies: {
        type: type.INTEGER,
        references: {
            model: 'movies', 
            key: 'id'
        }
        },
        id_genre: {
            type: type.INTEGER,
            references: {
                model: 'genre', 
                key: 'id'
            }
        },
    }, {
            sequelize,
            timestamps: false,
        }
    );
};