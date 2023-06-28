const { MfMachine, fa_asset } = require('../../../../models');

class MachineRepository {
    async getAll() {
        return await MfMachine.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }

    async getById(id) {
        return await MfMachine.findByPk(id);
    }

    async create(data) {
        return await MfMachine.create(data);
    }

    async update(id, data) {
        return await MfMachine.update(data, { where: { id: id } });
    }

    async delete(id) {
        return await MfMachine.destroy({ where: { id: id } });
    }
}

module.exports = new MachineRepository();
