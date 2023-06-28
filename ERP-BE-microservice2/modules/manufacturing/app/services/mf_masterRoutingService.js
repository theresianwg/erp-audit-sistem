const masterRoutingRepositoy = require('../repositories/mf_masterRoutingRepository');
const { generateMasterRoutingId } = require('../utils/mf_generateId');

class MasterRoutingService {
    async getAll() {
        try {
            const masterRouting = await masterRoutingRepositoy.getAll();
            return masterRouting;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await masterRoutingRepositoy.getById(id);
    }

    async getItemIdbyId(id) {
        return await masterRoutingRepositoy.getAllWhereItemId(id);
    }

    async create(data) {
        try {
            data.id = generateMasterRoutingId();
            const newMasterRouting = await masterRoutingRepositoy.create(data);
            return newMasterRouting;
        } catch (err) {
            throw err;
        }
    }

    async update(id, masterRouting) {
        return await masterRoutingRepositoy.update(id, masterRouting);
    }

    async delete(id) {
        return await masterRoutingRepositoy.delete(id);
    }
}

module.exports = new MasterRoutingService();
