const TransferToInventoryRepository = require('../repositories/transferToInventoryRepository');
const {
    generateTfToInvent,
    generateTfToInventDetail,
} = require('../utils/generateId');

class TransferToInventoryService {
    async getTfToInventoryById(id) {
        try {
            const fetch_tf_byId =
                await TransferToInventoryRepository.getTfToInventoryById(id);
            return fetch_tf_byId;
        } catch (err) {
            return err;
        }
    }

    async createTfToInventory(data) {
        try {
            data.id = generateTfToInvent();

            const parentData = {
                id: data.id,
                status: data.status,
                to_datetime: data.to_datetime,
            };
            //create tf parent first
            const tfToInventParent =
                await TransferToInventoryRepository.createTfToInventory(
                    parentData,
                );

            //loop items
            for (let i = 0; i < data.items.length; i++) {
                //create detail
                const detailData = {
                    id: generateTfToInventDetail(data.id),
                    id_to: data.id,
                    id_item: data.items[i].id,
                    quantity: data.items[i].quantity,
                };
                await TransferToInventoryRepository.createTfToInventoryDetail(
                    detailData,
                );
            }

            return tfToInventParent;
        } catch (err) {
            return err;
        }
    }
}

module.exports = new TransferToInventoryService();
