const router = require('express').Router();

const loginRoutes = require('./routes/login.routes');
const characthersRoutes = require('./routes/characters.routes');

router
    .use('/', loginRoutes)
    .use('/characters', characthersRoutes);

module.exports = router;