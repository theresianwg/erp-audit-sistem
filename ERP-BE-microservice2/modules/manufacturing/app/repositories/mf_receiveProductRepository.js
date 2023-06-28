const { MfReceiveProduct } = require('../../../../models');

class ReceiveProductRepository {
    async getAll() {
        return await MfReceiveProduct.findAll();
    }

    async getById(id) {
        return await MfReceiveProduct.findByPk(id);
    }

    async create(data) {
        const newReceiveProduct = await MfReceiveProduct.create(data);
        return newReceiveProduct;
    }

    async update(id, data) {
        return await MfReceiveProduct.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfReceiveProduct.destroy({ where: { id: id } });
    }
}

module.exports = new ReceiveProductRepository();
