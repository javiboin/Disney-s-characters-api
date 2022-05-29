const router = require('express').Router();

const usersRoutes = require('./routes/users.routes');

router.use('/', usersRoutes);

module.exports = router;