const transferOrderRepository = require('../repositories/mf_transferOrderRepository');
const { generateTransferOrderId } = require('../utils/mf_generateId');

class TransferOrderService {
    async getAll() {
        try {
            const transferOrder = await transferOrderRepository.getAll();
            return transferOrder;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await transferOrderRepository.getById(id);
    }

    async findWhereExist(po_id,item_id) {
        return await transferOrderRepository.findWhereExist(po_id,item_id);
    }

    async create(data) {
        try {
            data.id = generateTransferOrderId();
            const newTransferOrder = await transferOrderRepository.create(data);
            return newTransferOrder;
        } catch (err) {
            throw err;
        }
    }

    async update(id, transferOrder) {
        return await transferOrderRepository.update(id, transferOrder);
    }

    async delete(id) {
        return await transferOrderRepository.delete(id);
    }
}

module.exports = new TransferOrderService();
