const {InItem, InSaveStorage, InItemDetail} = require('../../../../models');

class InSaveStorageRepository{
    async createSaveStorage(data){
        try{
            return await InSaveStorage.create(data);
        }
        catch(error){
            throw error;
        }
        
    }

    async getSaveStorageByItemId(item_id){
        try{
            return await InSaveStorage.findOne({
                where: {
                    item_id: item_id,
                },
                include: {
                    model: InItem,
                    attributes: ['name'],
                },
            });
        }
        catch(error){
            throw error;
        }        
    }

    async getSaveStorageByItemDetailId(item_id){
        try{
            return await InSaveStorage.findOne({
                where: {
                    item_detail_id: item_id,
                },
                include: {
                    model: InItem,
                    attributes: ['name'],
                },
            });
        }
        catch(error){
            throw error;
        }        
    }

    async getAllSaveStorageByItemId(item_id){
        try{
            return await InSaveStorage.findAll({
                where: {
                    item_id: item_id,
                },
                include: [
                    {
                        model: InItemDetail,
                        attributes: ['id', 'id_item', 'buy_price', 'date'],
                    }
                ],
                order: [
                    [InItemDetail, 'date', 'ASC']
                ]
            });
        }
        catch(error){
            throw error;
        }        
    }

    async getAllSaveStorage(){
        try{
            return await InSaveStorage.findAll({
                include: {
                    model: InItem,
                    attributes: ['name'],
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async updateSaveStorage(id, data){
        try{
            return await InSaveStorage.update(data, {
                where: {
                    item_id: id,
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async updateStockSaveStorage(id_item, new_quantity){
        try{
            return await InSaveStorage.update({
                quantity: new_quantity,
            }, {
                where: {
                    item_id: id_item,
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async updateStockSaveStorageByItemDetail(id_item, new_quantity){
        try{
            return await InSaveStorage.update({
                quantity: new_quantity,
            }, {
                where: {
                    item_detail_id: id_item,
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async updateStockSaveStorageByDetailItem(id_item_detail, new_quantity){
        try{
            return await InSaveStorage.update({
                quantity: new_quantity,
            }, {
                where: {
                    item_detail_id: id_item_detail,
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async deleteSaveStorage(id){
        try{
            return await InSaveStorage.destroy({
                where: {
                    id: id,
                },
            });
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = new InSaveStorageRepository();