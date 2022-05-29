const { Router } = require('express');
const UsersControllers = require('../controllers/users.controllers');

const router = Router();

router
    .post('/login', UsersControllers.login)
    .post('/register', UsersControllers.register)

module.exports = router;