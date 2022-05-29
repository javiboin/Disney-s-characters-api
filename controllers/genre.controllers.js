// conexion a la base de datos
const { Genre } = require('../database/sync');

class GenreControllers {
    static async getAll(req, res) {
        console.log('getAll');
        const generos = await Genre.findAll();
        res.status(200).json({
            title: 'Lista de generos',
            data: generos
        })
    }
    static async getById(req, res) {
        console.log('getById');	
        const id = parseInt(req.params.id);
        const generos = await Genre.findOne({
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
    }
    static async update(req, res) {
        console.log('update');
    }
    static async delete(req, res) {
        console.log('delete');
    }
}

module.exports = GenreControllers;