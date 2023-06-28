const DelayedProductionRequestService = require('../services/delayedProductionRequestService');

class DelayedProductionController{
    async getAllDelayedProductionRequest(req, res, next){
        try{
            const result = await DelayedProductionRequestService.getAllDelayedProductionRequest();
            res.status(200).json(result);
        }
        catch(error){
            next(error);
        }
    }

    async getDelayedProductionRequestById(req, res, next){
        try{
            const {id} = req.params;
            const result = await DelayedProductionRequestService.getDelayedProductionRequestById(id);
            res.status(200).json(result);
        }
        catch(error){
            next(error);
        }
    }

    async createDelayedProductionRequest(req, res, next){
        try{
            const data = req.body;
            const result = await DelayedProductionRequestService.createDelayedProductionRequest(data);
            res.status(201).json(result);
        }
        catch(error){
            next(error);
        }
    }

    async updateDelayedProductionRequest(req, res, next){
        try{
            const {id} = req.params;
            const data = req.body;
            const result = await DelayedProductionRequestService.updateDelayedProductionRequest(id, data);
            res.status(200).json(result);
        }
        catch(error){
            next(error);
        }
    }
}

module.exports = new DelayedProductionController();