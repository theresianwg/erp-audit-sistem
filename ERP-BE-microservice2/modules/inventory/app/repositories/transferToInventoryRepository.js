const {
    InTransferToInventory,
    InTransferToInventoryDetail,
    InItem,
} = require('../../../../models');

class TransferToInventoryRepository {
    async getTfToInventoryById(id) {
        return await InTransferToInventory.findOne({
            where: { id: id },
            include: [
                {
                    model: InTransferToInventoryDetail,
                    attributes: ['id', 'id_item', 'quantity'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
    }

    async createTfToInventory(data) {
        return await InTransferToInventory.create(data);
    }

    async createTfToInventoryDetail(data) {
        return await InTransferToInventoryDetail.create(data);
    }
}

module.exports = new TransferToInventoryRepository();
