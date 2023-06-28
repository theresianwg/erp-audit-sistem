const { MfMasterOperation } = require('../../../../models');

class OperationRepository {
    async getAll() {
        return await MfMasterOperation.findAll();
    }

    async getById(id) {
        return await MfMasterOperation.findByPk(id);
    }

    async findOne(data) {
        return await MfMasterOperation.findOne(data);
    }

    async create(data) {
        const masterOperation = await MfMasterOperation.create(data);
        return masterOperation;
    }

    async update(id, MfMasterOperation) {
        return await MfMasterOperation.update(MfMasterOperation, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfMasterOperation.destroy({ where: { id: id } });
    }
}

module.exports = new OperationRepository();
