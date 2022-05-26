// conexion a la base de datos

class CharactersControllers {
    static async getAll(req, res) {
        console.log('getAll');
    }
    static async getById(req, res) {
        console.log('getById');	
    }
    static async getByName(req, res) {
        console.log('getByName');
    }
    static async getByAge(req, res) {
        console.log('getByAge');
    }
    static async getByIdMovie(req, res) {
        console.log('getByIdMovie');
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

module.exports = CharactersControllers;