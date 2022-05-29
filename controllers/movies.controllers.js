// sincronizar base de datos
const { Movies } = require('../database/sync');

class MoviesControllers {
    static async getAll(req, res) {
        console.log('Todas las peliculas');
        const peliculas = await Movies.findAll();
        res.status(200).json({
            title: 'Lista de peliculas',
            data: peliculas
        })
    }
    static async getById(req, res) {
        console.log('Pelicula por id');
        const id = parseInt(req.params.id);
        const pelicula = await Movies.findOne({
            where: {
                id: id
            }
        });

        if (pelicula) {
            res.status(200).json({
                title: 'Pelicula',
                data: pelicula
            })
        } else {
            res.status(404).json({
                title: 'Pelicula no encontrada',
                data: pelicula
            })
        }
    }
    static async getByName(req, res) {
        console.log('Pelicula por nombre');
        const name = req.params.name;
        const pelicula = await Movies.findOne({
            where: {
                name: name
            }
        });

        if (pelicula) {
            res.status(200).json({
                title: 'Pelicula',
                data: pelicula
            })
        } else {
            res.status(404).json({
                title: 'Pelicula no encontrada',
                data: pelicula
            })
        }
    }
    static async getByGenre(req, res) {
        console.log('Pelicula por genero');
    }
    static async getByOrder(req, res) {
        console.log('Pelicula por orden');
    }
    static async create(req, res) {
        console.log('Crear pelicula');
    }
    static async update(req, res) {
        console.log('Actualizar pelicula');
    }
    static async delete(req, res) {
        console.log('Eliminar pelicula');
    }
}

module.exports = MoviesControllers;