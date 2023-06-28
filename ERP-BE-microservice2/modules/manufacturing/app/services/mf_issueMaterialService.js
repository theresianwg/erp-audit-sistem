const issueMaterialRepository = require('../repositories/mf_issueMaterialRepository');
const { generateIssueMaterialId } = require('../utils/mf_generateId');
const { reduceStock } = require('../utils/mf_updateStock');

class IssueMaterialService {
    async getAll() {
        try {
            const machine = await issueMaterialRepository.getAll();
            return machine;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await issueMaterialRepository.getById(id);
    }

    async getAllWherePOandItemId(po_id,item_id) {
        return await MfMasterRouting.findAll({
            where: {
                po_id: po_id,
                item_id: item_id,
            }
        });
    }

    async create(data) {
        try {
            data.id = generateIssueMaterialId();
            const newIssueMaterial = await issueMaterialRepository.create(data);
            // await reduceStock(data.item_id, data.im_qty);
            return newIssueMaterial;
        } catch (err) {
            throw err;
        }
    }

    async update(id, data) {
        if (data.im_approval == 'Approved') {
            const issueMaterial = await issueMaterialRepository.getById(id);
            console.log(issueMaterial);
            // await reduceStock(issueMaterial.item_id, issueMaterial.im_qty);
        }
        return await issueMaterialRepository.update(id, data);
    }

    async delete(id) {
        return await issueMaterialRepository.delete(id);
    }
}

module.exports = new IssueMaterialService();
