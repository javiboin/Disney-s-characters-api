const router = require('express').Router();

const characthersRoutes = require('./routes/characters.routes');
const moviesRoutes = require('./routes/movies.routes');
const genreRoutes = require('./routes/genre.routes');

router
    .use('/characters', characthersRoutes)
    .use('/movies', moviesRoutes)
    .use('/genre', genreRoutes);

module.exports = router;