// sincronizar base de datos

class MoviesControllers {
    static async getAll(req, res) {
        console.log('Todas las peliculas');
    }
    static async getById(req, res) {
        console.log('Pelicula por id');
    }
    static async getByName(req, res) {
        console.log('Pelicula por nombre');
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