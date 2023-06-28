const {InDelayedProductionRequest, InItem} = require('../../../../models');

class InDelayedProductionRequestRepository{
    async createDelayedProductionRequest(data){
        try{
            return await InDelayedProductionRequest.create(data);
        }
        catch(error){
            throw error;
        }
    }

    async getAllDelayedProductionRequest(){
        try{
            return await InDelayedProductionRequest.findAll({
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

    async getDelayedProductionRequestById(id){
        try{
            return await InDelayedProductionRequest.findOne({
                where: {
                    id: id,
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

    async updateDelayedProductionRequest(id, data){
        try{
            return await InDelayedProductionRequest.update(data, {
                where: {
                    id: id,
                },
            });
        }
        catch(error){
            throw error;
        }
    }

    async deleteDelayedProductionRequest(id){
        try{
            return await InDelayedProductionRequest.destroy({
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

module.exports = new InDelayedProductionRequestRepository();