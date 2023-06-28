const InDelayedProductionRequestRepository = require('../repositories/delayedProductionRequest');
const {generateDelayedProductionRequestId} = require('../utils/generateId');

class InDelayedProductionRequestService{

    async createDelayedProductionRequest(data){
        try{
            data.id = generateDelayedProductionRequestId();
            data.status = 'waiting';
            return await InDelayedProductionRequestRepository.createDelayedProductionRequest(data);
        }
        catch(error){
            throw error;
        }
    }

    async getAllDelayedProductionRequest(){
        try{
            return await InDelayedProductionRequestRepository.getAllDelayedProductionRequest();
        }
        catch(error){
            throw error;
        }
    }

    async getDelayedProductionRequestById(id){
        try{
            return await InDelayedProductionRequestRepository.getDelayedProductionRequestById(id);
        }
        catch(error){
            throw error;
        }
    }

    async updateDelayedProductionRequest(id, data){
        try{
            return await InDelayedProductionRequestRepository.updateDelayedProductionRequest(id, data);
        }
        catch(error){
            throw error;
        }
    }

    async deleteDelayedProductionRequest(id){
        try{
            return await InDelayedProductionRequestRepository.deleteDelayedProductionRequest(id);
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = new InDelayedProductionRequestService();