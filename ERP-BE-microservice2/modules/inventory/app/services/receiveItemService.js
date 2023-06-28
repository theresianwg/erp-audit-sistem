const ReceiveItemRepository = require('../repositories/receiveItemRepository');
const InventoryRepository = require('../repositories/inventoryRepository');
const PurchaseOrderRepository = require('../repositories/purchaseOrderRepository');
const TransferToInventoryRepository = require('../repositories/transferToInventoryRepository');
const UnaprovedItemRepository = require('../repositories/unaprovedItemRepository');
const {
    generateReceiveItemId,
    generateReceiveItemDetail,
    generateUnaprovedItemId,
} = require('../utils/generateId');
const itemService = require('./itemService');

class ReceiveItemService {
    async getReceiveItems() {
        try {
            const receiveItems = await ReceiveItemRepository.getReceiveItems();
            return receiveItems;
        } catch (err) {
            throw err;
        }
    }

    async getReceiveItemById(id) {
        try {
            const receiveItem = await ReceiveItemRepository.getReceiveItemById(
                id,
            );
            return receiveItem;
        } catch (err) {
            throw err;
        }
    }

    async createReceiveItem(data) {
        try {
            //check action exist
            const checkActionExist =
                await ReceiveItemRepository.checkActionExist(data.id_action);
            if (!checkActionExist) {
                data.id = generateReceiveItemId();
                const parentData = {
                    id: data.id,
                    id_action: data.id_action,
                };
                const receiveItem =
                    await ReceiveItemRepository.createReceiveItem(parentData);

                //loop items
                for (let i = 0; i < data.items.length; i++) {
                    //check item with action
                    if (data.id_action.slice(0, 2) == 'PO') {
                        // get items in purchase order
                        const purchaseOrder =
                            await PurchaseOrderRepository.getPurchaseOrderById(
                                data.id_action,
                            );
                        const purchaseOrderDetail =
                            purchaseOrder.InPurchaseOrderDetails;
                        //loop per item in purchase order
                        for (let j = 0; j < purchaseOrderDetail.length; j++) {
                            if (
                                purchaseOrderDetail[j].id_item ==
                                data.items[i].id
                            ) {
                                //check quantity
                                const diffQuantity =
                                    purchaseOrderDetail[j].quantity -
                                    data.items[i].approved_quantity;
                                if (diffQuantity < 0) {
                                    throw {
                                        status: 'error',
                                        message:
                                            'Quantity is more than purchase order',
                                    };
                                } else if (diffQuantity > 0) {
                                    console.log(
                                        'DO REPORT ITEM : ' +
                                            diffQuantity +
                                            ' item',
                                    );
                                    const unaprovedData = {
                                        id: generateUnaprovedItemId(),
                                        id_rci: data.id,
                                        id_item: data.items[i].id,
                                        quantity: diffQuantity,
                                    };
                                    await UnaprovedItemRepository.createUnaprovedItem(
                                        unaprovedData,
                                    );
                                } else {
                                    console.log('ACCEPT ALL ITEM');
                                }
                            }
                        }
                    } else if (data.id_action.slice(0, 3) == 'TFI') {
                        // get items in transfer to inventory
                        const tfToInvent =
                            await TransferToInventoryRepository.getTfToInventoryById(
                                data.id_action,
                            );
                        const tfToInventDetail =
                            tfToInvent.InTransferToInventoryDetails;
                        //loop per item in transfer to inventory
                        for (let j = 0; j < tfToInventDetail.length; j++) {
                            if (
                                tfToInventDetail[j].id_item == data.items[i].id
                            ) {
                                //check quantity
                                const diffQuantity =
                                    tfToInventDetail[j].quantity -
                                    data.items[i].approved_quantity;
                                if (diffQuantity < 0) {
                                    throw {
                                        status: 'error',
                                        message:
                                            'Quantity is more than transfer to inventory',
                                    };
                                } else if (diffQuantity > 0) {
                                    console.log(
                                        'DO REPORT ITEM : ' +
                                            diffQuantity +
                                            ' item',
                                    );
                                    const unaprovedData = {
                                        id: generateUnaprovedItemId(),
                                        id_rci: data.id,
                                        id_item: data.items[i].id,
                                        quantity: diffQuantity,
                                    };
                                    await UnaprovedItemRepository.createUnaprovedItem(
                                        unaprovedData,
                                    );
                                } else {
                                    console.log('ACCEPT ALL ITEM');
                                }
                            }
                        }
                    }

                    //create detail
                    const detailData = {
                        id: generateReceiveItemDetail(data.id),
                        id_received_item: data.id,
                        id_item: data.items[i].id,
                        approved_quantity: data.items[i].approved_quantity,
                    };
                    await ReceiveItemRepository.createReceiveItemCheck(
                        detailData,
                    );

                    //update stock in inventory
                    const inventory_item =
                        await InventoryRepository.getInventoryByItemId(
                            data.items[i].id,
                        );
                    const newQuantity =
                        (inventory_item.quantity? inventory_item.quantity : 0) +
                        data.items[i].approved_quantity;
                    const updateData = {
                        quantity: newQuantity,
                    };
                    await InventoryRepository.updateInventory(
                        data.items[i].id,
                        updateData,
                    );

                    //create item detail
                    const itemDetailData = {
                        id_item: data.items[i].id,
                        buy_price: data.items[i].buy_price / data.items[i].approved_quantity,
                        quantity: data.items[i].approved_quantity,
                        date: new Date(),
                    };
                    await itemService.createItemDetail(itemDetailData);
                }

                return receiveItem;
            } else {
                throw {
                    status: 'error',
                    message: 'Action already checked',
                };
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ReceiveItemService();
