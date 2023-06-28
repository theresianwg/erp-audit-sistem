const { MfMasterRouting } = require('../../../../models');

class MasterRoutingRepository {
    async getAll() {
        return await MfMasterRouting.findAll();
    }

    async getAllWhereItemId(id) {
        return await MfMasterRouting.findAll({
            where: {
                item_id: id,
            },
            order: [['mr_order', 'ASC']],
        });
    }

    async getById(id) {
        return await MfMasterRouting.findByPk(id);
    }

    async create(data) {
        const masterOperation = await MfMasterRouting.create(data);
        return masterOperation;
    }

    async update(id, MfMasterRouting) {
        return await MfMasterRouting.update(MfMasterRouting, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfMasterRouting.destroy({ where: { id: id } });
    }
}

module.exports = new MasterRoutingRepository();
