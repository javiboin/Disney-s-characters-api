// conexion a la base de datos
const { Genres } = require('../database/sync');

class GenreControllers {
    static async getAll(req, res) {
        console.log('getAll');
        const generos = await Genres.findAll();
        res.status(200).json({
            title: 'Lista de generos',
            data: generos
        })
    }
    static async getById(req, res) {
        console.log('getById');	
        const id = parseInt(req.params.id);
        const generos = await Genres.findOne({
            where: {
                id: id
            }
        });

        if (generos) {
            res.status(200).json({
                title: 'Genero',
                data: generos
            })
        } else {
            res.status(404).json({
                title: 'Genero no encontrado',
                data: {}
            })
        }
    }
    static async create(req, res) {
        console.log('create');

        const { name, image } = req.body;
        try {
            const genre = await Genres.create({
                name: name,
                image: image
            });
            res.status(200).json({ message: 'Genero creado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el genero' });
        }
    }
    static async update(req, res) {
        console.log('update');

        const id = parseInt(req.params.id);

        const Genero = await Genres.findOne({
            where: {
                id: id
            }
        });

        if (Genero) {
            await Genres.update(req.body, {
                where: {
                    id: id
                }
            })
            res.status(200).json({ message: 'Genero actualizado'});
        } else {
            res.status(404).json({ message: 'Genero no encontrado'});
        }
    }
    static async delete(req, res) {
        console.log('delete');

        const id = parseInt(req.params.id);

        await Genres.destroy({
            where: {
                id: id
            }
        })

        .then((deletedRecord) => {
            if (deletedRecord === 1) {
                res.status(200).json({ message: 'Genero eliminado'});
            } else {
                res.status(404).json({ message: 'Genero no encontrado'});
            }
        })

        .catch((error) => {
            res.status(500).json({ message: 'Error al eliminar el genero'});
        })
    }
}

module.exports = GenreControllers;