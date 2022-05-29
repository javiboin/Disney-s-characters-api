module.exports = (sequelize, type) => {
    return sequelize.define('MoviesGenre', {
        id_characters: {
            type: type.INTEGER,
            references: {
                model: 'characters', 
                key: 'id'
            }
        },
        id_movies: {
        type: type.INTEGER,
        references: {
            model: 'movies', 
            key: 'id'
        }
        },
    }, {
            sequelize,
            timestamps: false,
        }
    );
};