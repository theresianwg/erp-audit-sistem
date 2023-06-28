const productionRequestRepository = require('../repositories/mf_productionRequestRepository');
const { generateProductionRequestId } = require('../utils/mf_generateId');

class ProductionRequestService {
    async getAll() {
        try {
            const machine = await productionRequestRepository.getAll();
            return machine;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await productionRequestRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateProductionRequestId();
            data.pr_status = 'On Progress';
            const newMachine = await productionRequestRepository.create(data);
            return newMachine;
        } catch (err) {
            throw err;
        }
    }

    async update(id, productionRequest) {
        return await productionRequestRepository.update(id, productionRequest);
    }

    async delete(id) {
        return await productionRequestRepository.delete(id);
    }
}

module.exports = new ProductionRequestService();
