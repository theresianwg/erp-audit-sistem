const { MfTransferOrder } = require('../../../../models');

class TransferOrderRepository {
    async getAll() {
        return await MfTransferOrder.findAll();
    }

    async getById(id) {
        return await MfTransferOrder.findByPk(id);
    }

    async findWhereExist(po_id,item_id) {
        const transMat = await MfTransferOrder.findOne({
            where: { 
                po_id: po_id,
                item_id: item_id
            }
        });
        return transMat;
    }

    async create(data) {
        const newTransferOrder = await MfTransferOrder.create(data);
        return newTransferOrder;
    }

    async update(id, data) {
        return await MfTransferOrder.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfTransferOrder.destroy({ where: { id: id } });
    }
}

module.exports = new TransferOrderRepository();
