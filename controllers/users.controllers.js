require('dotenv').config();
//sincronizar base de datos
const { Users } = require('../database/sync');
const encoded = require('../middlewares/encoded.middleware');
const jwt = require('jsonwebtoken');

class UsersControllers {
    static async login(req, res) {
        console.log('login');

        const username = req.body.username;
        const password = req.body.password;

        const user = await Users.findOne({
            where: {
                username: username
            }, raw: true
        });

        const passwordToConvert = await encoded.compareHash(password, user.password);

        if (user && passwordToConvert) {
            const token = jwt.sign({
                username: user.username,
                password: user.password 
            }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({
                message: 'Login exitoso',
                token: token
            });
        } else {
            res.status(401).json({
                message: 'Login fallido'
            });
        }
    }
    static async register(req, res) {
        console.log('register');

        const username = req.body.username;
        const passwordEncrypted = await encoded.createHash(req.body.password);
        try {
            await Users.create({
                username: username,
                password: passwordEncrypted
            });
            res.status(201).json({ message: 'Usuario creado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario' });
        }
    }
}

module.exports = UsersControllers;