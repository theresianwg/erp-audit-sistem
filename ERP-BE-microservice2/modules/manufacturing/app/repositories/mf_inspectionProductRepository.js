const { MfInspectionProduct } = require('../../../../models');

class InspectionProductRepository {
    async getAll() {
        return await MfInspectionProduct.findAll();
    }

    async getById(id) {
        return await MfInspectionProduct.findByPk(id);
    }

    async create(data) {
        const newMfInspectionProduct = await MfInspectionProduct.create(data);
        return newMfInspectionProduct;
    }

    async update(id, data) {
        return await MfInspectionProduct.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfInspectionProduct.destroy({ where: { id: id } });
    }
}

module.exports = new InspectionProductRepository();
