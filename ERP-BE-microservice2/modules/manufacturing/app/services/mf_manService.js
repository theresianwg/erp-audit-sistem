const manRepository = require('../repositories/mf_manRepository');
const { generateManId } = require('../utils/mf_generateId');

class ManService {
    async getAll() {
        try {
            const man = await manRepository.getAll();
            return man;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await manRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateManId();
            const newMan = await manRepository.create(data);
            return newMan;
        } catch (err) {
            throw err;
        }
    }

    async update(id, man) {
        return await manRepository.update(id, man);
    }

    async delete(id) {
        return await manRepository.delete(id);
    }
}

module.exports = new ManService();
