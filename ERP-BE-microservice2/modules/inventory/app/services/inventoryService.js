const InventoryRepository = require('../repositories/inventoryRepository');
const ItemService = require('./itemService');
const calculate = require('../utils/calculate');
const ProductionRequestService = require('../../../manufacturing/app/services/mf_productionRequestService');

class InventoryService {
    async createInventory(data) {
        const item = await ItemService.getById(data.item_id);
        if (!item) {
            return {
                status: 'error',
                message: 'Item not found',
            };
        }
        const rop = calculate.calReorderPoint(
            data.lead_time,
            data.safety_stock,
            data.daily_consume,
        );
        data.reorder_point = rop;
        return await InventoryRepository.createInventory(data);
    }

    async getInventoryByItemId(item_id) {
        const inventory = await InventoryRepository.getInventoryByItemId(
            item_id,
        );
        return inventory;
    }

    async checkItemInInventory(item_id) {
        const item_inventory = await InventoryRepository.getInventoryByItemId(
            item_id,
        );
        const item = await ItemService.getById(item_id);

        let needToRestock = false;

        if (item.id_category == 2) {
            if (item_inventory.quantity <= 0) {
                const productionRequestData = {
                    item_id: id_product,
                    pr_qty: item_inventory.reorder_point,
                    pr_date: new Date(),
                    pr_start: new Date(),
                    pr_end: new Date(
                        Date.now() + 3600 * 1000 * 24 * itemInventory.lead_time,
                    ),
                    pr_status: 'on progress',
                    so_id: 'MakeToStock',
                    wc_id: 'WC4111',
                };
                await ProductionRequestService.create(productionRequestData);
            }
        } else {
            item_inventory.quantity <= item_inventory.reorder_point
                ? (needToRestock = true)
                : (needToRestock = false);
        }

        return inventory;
    }

    async getAllInventory() {
        return await InventoryRepository.getAllInventory();
    }

    async updateInventory(item_id, data) {
        return await InventoryRepository.updateInventory(item_id, data);
    }

    async deleteInventory(id) {
        return await InventoryRepository.deleteInventory(id);
    }
}

module.exports = new InventoryService();
