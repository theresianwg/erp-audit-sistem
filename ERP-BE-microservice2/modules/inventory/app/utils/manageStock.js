const inventoryService = require('../services/inventoryService');
const itemService = require('../services/itemService');
const purchaseRequestService = require('../services/purchaseRequestService');
const bomService = require('../services/bomService');
const PurchaseRequestData = require('../dataTypes/purchaseRequestData');
const NeedProdAndPurchase = require('../dataTypes/needProdAndPurchase');
const ProductionRequestService = require('../../../manufacturing/app/services/mf_productionRequestService');
const SaveStorageService = require('../services/saveStorageService');
const InDelayedProductionRequestService = require('../services/delayedProductionRequestService');
const ItemService = require('../services/itemService');

const needToRestock = (quantity, reorder_point) => {
    if (quantity <= reorder_point) {
        return true;
    }
    return false;
};

const updateInventory = async (bom_children, purchaseRequestData, needProdAndPurchaseData, quantity) => {
    for (let i = 0; i < bom_children.length; i++) {
        const child = bom_children[i];

        //consume stock from inventory
        // const itemInventory = await inventoryService.getInventoryByItemId(
        //     child.InItem.id,
        // );
        // const quantityNeeded = child.quantity * quantity;
        // const newQuantity = itemInventory.quantity - quantityNeeded;
        // const updateData = {
        //     quantity: newQuantity < 0 ? 0 : newQuantity,
        // };
        // await inventoryService.updateInventory(child.InItem.id, updateData);

        let purchaseRequestDataReturn = purchaseRequestData;
        let needProdAndPurchaseDataReturn = needProdAndPurchaseData;
        let quantityNeeded = child.quantity * quantity;
        let totalItemDetailQty = 0

        //loop again for img
        if(child.InItem.id.includes('IMG')){
            const bom = await bomService.getBomByParentId(child.InItem.id);
            const returnUpdateInventory = await updateInventory(
                bom.InBomChildren,
                purchaseRequestData,
                needProdAndPurchaseData,
                quantity,
            );

            purchaseRequestDataReturn = returnUpdateInventory.purchaseRequestData;
            needProdAndPurchaseDataReturn = returnUpdateInventory.needProdAndPurchaseData;
        }
        else{
            // consume stock from item detail
            const itemParent = await ItemService.getById(child.InItem.id);

            // loop per item detail
            for (let i = 0; i < itemParent.InItemDetails.length; i++) {
                const itemDetail = itemParent.InItemDetails[i];
                console.log('itemDetail', itemDetail);
                console.log('quantityNeeded', quantityNeeded);
                if(itemDetail.quantity > quantityNeeded){
                    const updateData = {
                        quantity: itemDetail.quantity - quantityNeeded,
                    };
                    await itemService.updateItemDetail(itemDetail.id, updateData);

                    // move to save storage
                    const saveStorageQuantity = quantityNeeded;
                    await SaveStorageService.updateStockSaveStorageByItemDetail(child.InItem.id, itemDetail.id, saveStorageQuantity, itemParent.buy_unit)

                    break;
                }
                else{
                    const updateData = {
                        quantity: 0,
                    };
                    await itemService.updateItemDetail(itemDetail.id, updateData);
                    quantityNeeded -= itemDetail.quantity;

                    // move to save storage
                    const saveStorageQuantity = itemDetail.quantity;
                    await SaveStorageService.updateStockSaveStorageByItemDetail(child.InItem.id, itemDetail.id, saveStorageQuantity, itemParent.buy_unit)
                }
            }

            //sum total quantity in item detail
            for (let i = 0; i < itemParent.InItemDetails.length; i++) {
                const itemDetail = itemParent.InItemDetails[i];
                totalItemDetailQty += itemDetail.quantity;
            }

            // //move stock to save storage
            // const saveStorageQuantity = quantityNeeded > itemInventory.quantity ? itemInventory.quantity : quantityNeeded;
            // // const saveStorageQuantity = quantityNeeded > totalItemDetailQty ? totalItemDetailQty : quantityNeeded;
            // await SaveStorageService.updateStockSaveStorage(child.InItem.id, saveStorageQuantity, itemParent.buy_unit);

            const saveStorageItem = await SaveStorageService.getSaveStorageByItemId(child.InItem.id);
            const saveStorageQuantity = saveStorageItem.quantity;

            //want to know how many qty can be produced
            const quantityProduce = Math.floor(saveStorageQuantity /child.quantity) ;
            const currentQuantityProd = needProdAndPurchaseData.getQuantityProd();
            console.log('currentQuantityProd', currentQuantityProd);
            console.log('quantityProduce', quantityProduce);
            needProdAndPurchaseData.setQuantityProd(currentQuantityProd < quantityProduce ? currentQuantityProd : quantityProduce);

            // sum new qty after sales
            const newQuantity = totalItemDetailQty - quantity;

            //get item inventory
            const itemInventory = await inventoryService.getInventoryByItemId(
                child.InItem.id,
            );

            //check if need to purchase item
            if (needToRestock(newQuantity, itemInventory.reorder_point)) {
                purchaseRequestData.addData({
                    id_item: child.InItem.id,
                    quantity: (itemInventory.eoq > quantityNeeded) ? itemInventory.eoq : quantityNeeded, //ganti ke eoq kalau udah ada eoq
                });
                //add waiting item to purchase
                needProdAndPurchaseData.addWaitingItem({
                    id_item: child.InItem.id,
                    quantity: (itemInventory.eoq > quantityNeeded) ? itemInventory.eoq : quantityNeeded
                });
            }
        }

        purchaseRequestData = purchaseRequestDataReturn;
        needProdAndPurchaseData = needProdAndPurchaseDataReturn;
    }
    return {purchaseRequestData, needProdAndPurchaseData};
};

const updateAfterSales = async (id_so, id_product, quantity) => {
    try{
        //consume stock from inventory
        const itemInventory = await inventoryService.getInventoryByItemId(
            id_product,
        );
        const item = await itemService.getById(id_product);
        const newQuantity = itemInventory.quantity - quantity;
        
        //update quantity in inventory
        const updateData = {
            quantity: newQuantity < 0 ? 0 : newQuantity,
        };
        await inventoryService.updateInventory(id_product, updateData);

        //check if need to produce
        if (newQuantity < 0) {
            //get item needs to produce
            const bom = await bomService.getBomByParentId(id_product);
            const {purchaseRequestData, needProdAndPurchaseData} = await updateInventory(
                bom.InBomChildren,
                new PurchaseRequestData(),
                new NeedProdAndPurchase(),
                Math.abs(newQuantity),
            );

            //set delayed production
            if(Math.abs(newQuantity) - needProdAndPurchaseData.getQuantityProd() > 0){
                needProdAndPurchaseData.setDelayedProd({
                    item_id: id_product,
                    quantity: Math.abs(newQuantity) - needProdAndPurchaseData.getQuantityProd(),
                });
            }            

            if (purchaseRequestData.getData().length > 0) {
                //create purchase request
                const newPurchaseRequestData = {
                    items: purchaseRequestData.getData(),
                };
                await purchaseRequestService.createPurchaseRequest(
                    newPurchaseRequestData,
                );
            }

            /*
            * create production request in here
            * make to stock if needed
            */

            //this function is for make to order, req production by kekurangan (yang bahan bakunya cukup)
            if (item.id_category == 2) {
                const productionRequestData = {
                    item_id: id_product,
                    // pr_qty: Math.abs(newQuantity),
                    pr_qty: needProdAndPurchaseData.getQuantityProd(),
                    pr_date: new Date(),
                    pr_start: new Date(),
                    pr_end: new Date(
                        Date.now() + 3600 * 1000 * 24 * itemInventory.lead_time,
                    ),
                    pr_status: 'on progress',
                    so_id: id_so,
                    wc_id: 'WC4111',
                };
                await ProductionRequestService.create(productionRequestData);
            }

            /*
            * create delayed production request and waiting item in here
            * delayed production request have function to check if the items are already
            */

            //create delayed production request
            if (needProdAndPurchaseData.getDelayedProd()) {
                console.log(needProdAndPurchaseData.getDelayedProd());
                
                const delayedProductionRequestData = needProdAndPurchaseData.getDelayedProd()
                await InDelayedProductionRequestService.createDelayedProductionRequest(delayedProductionRequestData);
            }
        }
    }
    catch(err){
        console.log(err);
    }
    
};

module.exports = {
    needToRestock,
    updateInventory,
    updateAfterSales,
};
