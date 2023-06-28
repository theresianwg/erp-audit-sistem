const costAccountingRepository = require('../repositories/mf_costAccountingRepository');
const {
    generateCostAccountingId,
    generateCostAccountingDetailId,
} = require('../utils/mf_generateId');
// const { addStock } = require('../utils/mf_updateStock');

class CostAccountingService {
    async getAll() {
        try {
            const inspectionProduct = await costAccountingRepository.getAll();
            return inspectionProduct;
        } catch (err) {
            throw err;
        }
    }
    
    async getById(id) {
        return await costAccountingRepository.getById(id);
    }
    async getLatest() {
        return await costAccountingRepository.getLatest()
    }
    async createCostAccounting(data) {
        try {
            const newCostAccounting =
                await costAccountingRepository.createCostAccounting(data);
            return newCostAccounting;
        } catch (err) {
            throw err;
        }
    }

    async createCostAccountingDetail(data) {
        try {
            const newCostAccounting =
                await costAccountingRepository.createCostAccountingDetail(data);
            return newCostAccounting;
        } catch (err) {
            throw err;
        }
    }

    async update(id, data) {
        return await costAccountingRepository.update(id, data);
    }

    async delete(id) {
        return await costAccountingRepository.delete(id);
    }
}

module.exports = new CostAccountingService();
