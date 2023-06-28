const { InInventory, InItem } = require('../../../../models');

class InventoryRepository {
    async createInventory(data) {
        return await InInventory.create(data);
    }

    async getInventoryByItemId(item_id) {
        return await InInventory.findOne({
            where: {
                item_id: item_id,
            },
            include: {
                model: InItem,
                attributes: ['name'],
            },
        });
    }

    async getAllInventory() {
        return await InInventory.findAll({
            include: {
                model: InItem,
                attributes: ['name'],
            },
        });
    }

    async updateInventory(id, data) {
        return await InInventory.update(data, {
            where: {
                item_id: id,
            },
        });
    }

    async deleteInventory(id) {
        return await InInventory.destroy({
            where: {
                id: id,
            },
        });
    }
}

module.exports = new InventoryRepository();
