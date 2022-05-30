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

        const { image, title, created, rating } = req.body;
        try {
            await Movies.create({
                image: image,
                title: title,
                created: created,
                rating: rating,
            });
            res.status(201).json({ message: 'Pelicula creada' });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la pelicula' });
        }
    }
    static async update(req, res) {
        console.log('Actualizar pelicula');

        const id = parseInt(req.params.id);

        const Peliculas = await Movies.findOne({
            where: {
                id: id
            }
        });

        if (Peliculas) {
            await Movies.update(req.body, {
                where: {
                    id: id
                }
            })
            res.status(200).json({ message: 'Pelicula actualizado'});
        } else {
            res.status(404).json({ message: 'Pelicula no encontrado'});
        }
    }
    static async delete(req, res) {
        console.log('Eliminar pelicula');

        const id = parseInt(req.params.id);
        await Movies.destroy({
            where : {
                id: id
            }
        })
        
        .then((deletedRecord) => {
            if (deletedRecord === 1) {
                res.status(200).json({ message: 'Pelicula eliminado'});
            } else {
                res.status(404).json({ message: 'Pelicula no encontrado'});
            }
        })

       .catch((error) => {
            res.status(500).json({ message: 'Error al eliminar la pelicula'});
        }); 
    }
}

module.exports = MoviesControllers;