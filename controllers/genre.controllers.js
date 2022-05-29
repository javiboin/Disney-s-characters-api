// conexion a la base de datos

class GenreControllers {
    static async getAll(req, res) {
        console.log('getAll');
    }
    static async getById(req, res) {
        console.log('getById');	
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