const masterOperationRepositoy = require('../repositories/mf_masterOperationRepository');
const {
    generateOperationId,
    generateOperationDetailId,
} = require('../utils/mf_generateId');

class MasterOperationService {
    async getAll() {
        try {
            const operation = await masterOperationRepositoy.getAll();
            return operation;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await masterOperationRepositoy.getById(id);
    }

    async getOperationDetail(id) {
        return await masterOperationRepositoy.getOperationDetail(id);
    }

    async findOne(data) {
        return await masterOperationRepositoy.findOne(data);
    }

    async create(data) {
        try {
            data.id = generateOperationId();
            const newOperation = await masterOperationRepositoy.create(
                data,
            );

            return { newOperation };
        } catch (err) {
            throw err;
        }
    }

    async update(id, operation) {
        return await masterOperationRepositoy.update(id, operation);
    }

    async delete(id) {
        return await masterOperationRepositoy.delete(id);
    }
}

module.exports = new MasterOperationService();
