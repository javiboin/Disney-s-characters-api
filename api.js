const router = require('express').Router();

const loginRoutes = require('./routes/login.routes');
const characthersRoutes = require('./routes/characters.routes');
const moviesRoutes = require('./routes/movies.routes');

router
    .use('/', loginRoutes)
    .use('/characters', characthersRoutes)
    .use('/movies', moviesRoutes);

module.exports = router;