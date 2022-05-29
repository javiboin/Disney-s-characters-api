// conexion a la base de datos
const { Characters } = require('../database/sync');

class CharactersControllers {
    static async getAll(req, res) {
        console.log('getAll');
        const personajes = await Characters.findAll();
        res.status(200).json({
            title: 'Lista de personajes',
            data: personajes
        })
    }
    static async getById(req, res) {
        console.log('getById');
        const id = parseInt(req.params.id);
        const personaje = await Characters.findOne({
            where: {
                id: id
            }
        });

        if (personaje) {
            res.status(200).json({
                title: 'Personaje',
                data: personaje
            })
        } else {
            res.status(404).json({
                title: 'Personaje no encontrado',
                data: {}
            })
        }
    }
    static async getByName(req, res) {
        console.log('getByName');
        const name = req.params.name;
        const personaje = await Characters.findOne({
            where: {
                name: name
            }
        });

        if (personaje) {
            res.status(200).json({
                title: 'Personaje',
                data: personaje
            })
        } else {
            res.status(404).json({
                title: 'Personaje no encontrado',
                data: {}
            })
        }
    }
    static async getByAge(req, res) {
        console.log('getByAge');
        const age = req.params.age;
        const personaje = await Characters.findOne({
            where: {
                age: age
            }
        });

        if (personaje) {
            res.status(200).json({
                title: 'Personaje',
                data: personaje
            })
        } else {
            res.status(404).json({
                title: 'Personaje no encontrado',
                data: {}
            })
        }
    }
    static async getByIdMovie(req, res) {
        console.log('getByIdMovie');
        // tomar como dato el id de la pelicula
        // buscar en la tabla intermedia los valores de busqueda
        // tomar esa cadena de datos y realizar una busqueda en la tabla de personajes segun id del array
        // enviar la respuesta
    }
    static async create(req, res) {
        console.log('create');

        const { image, name, age, weight, history } = req.body;
        try {
            await Characters.create({
                image: image,
                name: name,
                age: age,
                weight: weight,
                history: history
            });
            res.status(200).json({ message: 'Personaje creado'});	
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el personaje'});
        }
    }
    static async update(req, res) {
        console.log('update');
    }
    static async delete(req, res) {
        console.log('delete');
    }
}

module.exports = CharactersControllers;