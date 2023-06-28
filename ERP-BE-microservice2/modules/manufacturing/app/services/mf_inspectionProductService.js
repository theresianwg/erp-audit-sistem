const inspectionProductRepository = require('../repositories/mf_inspectionProductRepository');
const { generateInspectionProduct } = require('../utils/mf_generateId');
const { addStock } = require('../utils/mf_updateStock');

class InspectionProductService {
    async getAll() {
        try {
            const inspectionProduct =
                await inspectionProductRepository.getAll();
            return inspectionProduct;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await inspectionProductRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateInspectionProduct();
            const newInspectionProduct =
                await inspectionProductRepository.create(data);

            // await addStock(data.item_id, data.ip_qty, data.ip_qty_reject);
            return newInspectionProduct;
        } catch (err) {
            throw err;
        }
    }

    async update(id, data) {
        return await inspectionProductRepository.update(id, data);
    }

    async delete(id) {
        return await inspectionProductRepository.delete(id);
    }
}

module.exports = new InspectionProductService();
