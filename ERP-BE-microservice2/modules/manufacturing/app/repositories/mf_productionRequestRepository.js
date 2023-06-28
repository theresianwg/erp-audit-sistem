const { MfProductionRequest } = require('../../../../models');

class ProductionRequestRepository {
    async getAll() {
        return await MfProductionRequest.findAll();
    }

    async getById(id) {
        return await MfProductionRequest.findByPk(id);
    }

    async create(data) {
        const newProductionRequest = await MfProductionRequest.create(data);
        return newProductionRequest;
    }

    async update(id, data) {
        return await MfProductionRequest.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfProductionRequest.destroy({ where: { id: id } });
    }
}

module.exports = new ProductionRequestRepository();
