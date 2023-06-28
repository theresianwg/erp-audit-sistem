const { MfProductionOrder } = require('../../../../models');

class ProductionOrderRepository {
    async getAll() {
        return await MfProductionOrder.findAll();
    }

    async getById(id) {
        return await MfProductionOrder.findByPk(id);
    }

    async create(data) {
        const newProductionOrder = await MfProductionOrder.create(data);
        return newProductionOrder;
    }

    async update(id, data) {
        return await MfProductionOrder.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfProductionOrder.destroy({ where: { id: id } });
    }
}

module.exports = new ProductionOrderRepository();
