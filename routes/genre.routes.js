const { Router } = require('express');
const GenreControllers = require('../controllers/genre.controllers');
const router = Router();

router
    .get('/', GenreControllers.getAll)
    .get('/:id', GenreControllers.getById)
    .post('/create', GenreControllers.create)
    .put('/update/:id', GenreControllers.update)
    .delete('/delete/:id', GenreControllers.delete);

module.exports = router;