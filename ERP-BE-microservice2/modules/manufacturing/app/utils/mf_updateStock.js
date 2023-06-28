const inventoryService = require('../../../inventory/app/services/inventoryService');
// const receiveProductService = require("../services/mf_receiveProductService")

const addStock = async (id_item, qty, reject) => {
    const qty_inventory = await inventoryService.getInventoryByItemId(id_item);

    var total = qty_inventory.quantity + qty - reject;

    const update = { quantity: total };

    const inventory = await inventoryService.updateInventory(id_item, update);
};

const reduceStock = async (id_item, qty) => {
    const qty_inventory = await inventoryService.getInventoryByItemId(id_item);

    var total = qty_inventory.quantity - qty;

    const update = { quantity: total };

    const inventory = await inventoryService.updateInventory(id_item, update);
};

module.exports = {
    addStock,
    reduceStock,
};
