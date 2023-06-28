const SaveStorageRepository = require('../repositories/saveStorageRepository');
const SaveStorageData = require('../dataTypes/saveStorageData');

class SaveStorageService {
    async createSaveStorage(data) {
        try{
            return await SaveStorageRepository.createSaveStorage(data);
        }
        catch(error){
            throw error;
        }
    }

    async getSaveStorageByItemId(item_id) {
        try{
            return await SaveStorageRepository.getSaveStorageByItemId(item_id);
        }
        catch(error){
            throw error;
        }
    }

    async getAllSaveStorageByItemId(item_id){
        try{
            return await SaveStorageRepository.getAllSaveStorageByItemId(item_id);
        }
        catch(error){
            throw error;
        }
    }

    async getAllSaveStorage() {
        try{
            return await SaveStorageRepository.getAllSaveStorage();
        }
        catch(error){
            throw error;
        }
    }

    async updateStockSaveStorage(id_item, new_quantity, unit) {
        try{
            const findItem = await SaveStorageRepository.getSaveStorageByItemId(id_item);
            if(!findItem){
                return await SaveStorageRepository.createSaveStorage({
                    item_id: id_item,
                    quantity: new_quantity,
                    item_unit: unit,
                });
            }
            return await SaveStorageRepository.updateStockSaveStorage(id_item, new_quantity);
        }
        catch(error){
            throw error;
        }
    }

    async updateStockSaveStorageByItemDetail(id_item, id_item_detail, new_quantity, unit) {
        try{
            const findItem = await SaveStorageRepository.getSaveStorageByItemId(id_item);
            if(!findItem){
                return await SaveStorageRepository.createSaveStorage({
                    item_id: id_item,
                    quantity: new_quantity,
                    item_unit: unit,
                });
            }
            else{
                const itemDetail = await SaveStorageRepository.getSaveStorageByItemDetailId(id_item_detail);
                new_quantity = new_quantity + itemDetail.quantity;
            }
            return await SaveStorageRepository.updateStockSaveStorageByItemDetail(id_item_detail, new_quantity);
        }
        catch(error){
            throw error;
        }
    }

    async consumeStockSaveStorage(id_item, need_quantity) {
        try{
            const findItem = await SaveStorageRepository.getAllSaveStorageByItemId(id_item);
            
            let temp_need_quantity = need_quantity;
            const arr_result = [];
            const saveStorageData  = new SaveStorageData();
            if(findItem.lenght == 0){
                return {
                    message: "Item not found",
                }
            }
            //if item exist
            else{
                //looping to consume each stock
                for(let i = 0; i < findItem.length; i++){
                    if(findItem[i].quantity >= temp_need_quantity){
                        const new_quantity = findItem[i].quantity - temp_need_quantity;
                        const updateSaveStorage = await SaveStorageRepository.updateStockSaveStorageByDetailItem(findItem[i].item_detail_id, new_quantity);
                        arr_result.push({
                            // item_detail_id: findItem[i].InItemDetail.id,
                            quantity: temp_need_quantity,
                            buy_price: findItem[i].InItemDetail.buy_price,
                            buy_date: findItem[i].InItemDetail.date,
                        });
                        const total = temp_need_quantity * findItem[i].InItemDetail.buy_price;
                        saveStorageData.sumTotalPrice(total);
                        break;
                    }
                    else{
                        const new_quantity = 0;
                        const updateSaveStorage = await SaveStorageRepository.updateStockSaveStorageByDetailItem(findItem[i].item_detail_id, new_quantity);
                        arr_result.push({
                            // id_item_detail: findItem[i].InItemDetail.id,
                            quantity: findItem[i].quantity,
                            buy_price: findItem[i].InItemDetail.buy_price,
                            buy_date: findItem[i].InItemDetail.date,
                        });
                        temp_need_quantity = temp_need_quantity - findItem[i].quantity;
                        const total = findItem[i].quantity * findItem[i].InItemDetail.buy_price;
                        saveStorageData.sumTotalPrice(total);
                    }
                }
            }
            return{
                id_item: id_item,
                result : arr_result,
                total_price: saveStorageData.getTotalPrice(),
            }
        }
        catch(error){
            throw error;
        }
    }

    async deleteSaveStorage(id) {
        try{
            return await SaveStorageRepository.deleteSaveStorage(id);
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = new SaveStorageService();