const { Router } = require('express');

const CharacthersControllers = require('../controllers/characters.controllers');

// verificar token de autenticacion

const router = Router();

router
    .get('/', CharacthersControllers.getAll)
    .get('/:id', CharacthersControllers.getById)
    .get('/name/:name', CharacthersControllers.getByName)
    .get('/age/:age', CharacthersControllers.getByAge)
    .get('/movie/:idMovie', CharacthersControllers.getByIdMovie)
    .post('/create', CharacthersControllers.create)
    .put('/update/:id', CharacthersControllers.update)
    .delete('/delete/:id', CharacthersControllers.delete);

module.exports = router;