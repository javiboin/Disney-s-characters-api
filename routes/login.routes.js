const { Router } = require('express');
const LoginControllers = require('../controllers/login.controllers');

const router = Router();

router
    .post('/login', LoginControllers.login)
    .post('/register', LoginControllers.register)

module.exports = router;