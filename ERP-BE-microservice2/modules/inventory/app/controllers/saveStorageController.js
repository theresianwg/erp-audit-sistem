const SaveStorageService = require('../services/saveStorageService');

class SaveStorageController{
    async getSaveStorageByItemId(req, res){
        try{
            const {id_item} = req.body;
            const result = await SaveStorageService.getSaveStorageByItemId(id_item);
            return res.status(200).json({
                message: "Success",
                data: result,
            });
        }
        catch(error){
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async getAllSaveStorageByItemId(req, res){
        try{
            const {id_item} = req.body;
            const result = await SaveStorageService.getAllSaveStorageByItemId(id_item);
            return res.status(200).json({
                message: "Success",
                data: result,
            });
        }
        catch(error){
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async consumeStockSaveStorage(req, res){
        try{
            const {id_item, need_quantity} = req.body;
            const result = await SaveStorageService.consumeStockSaveStorage(id_item, need_quantity);
            return res.status(200).json({
                message: "Success",
                data: result,
            });
        }
        catch(error){
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

module.exports = new SaveStorageController();