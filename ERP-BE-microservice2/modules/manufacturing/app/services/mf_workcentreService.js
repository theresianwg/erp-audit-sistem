const workcentreRepository = require('../repositories/mf_workcentreRepository');
const { generateWorkcentreId } = require('../utils/mf_generateId');

class WorkcentreService {
    async getAll() {
        try {
            const workcentre = await workcentreRepository.getAll();
            return workcentre;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await workcentreRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateWorkcentreId();
            const newWorkcentre = await workcentreRepository.create(data);
            return newWorkcentre;
        } catch (err) {
            throw err;
        }
    }

    async update(id, workcentre) {
        return await workcentreRepository.update(id, workcentre);
    }

    async delete(id) {
        return await workcentreRepository.delete(id);
    }
}

module.exports = new WorkcentreService();
