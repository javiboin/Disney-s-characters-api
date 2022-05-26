const { Router } = require('express');
const MoviesControllers = require('../controllers/movies.controllers');

const router = Router();

router
    .get('/', MoviesControllers.getAll)
    .get('/:id', MoviesControllers.getById)
    .get('/name/:name', MoviesControllers.getByName)
    .get('/genre/:genre', MoviesControllers.getByGenre)
    .get('/order/:order', MoviesControllers.getByOrder)
    .post('/create', MoviesControllers.create)
    .put('/update/:id', MoviesControllers.update)
    .delete('/delete/:id', MoviesControllers.delete);

module.exports = router;