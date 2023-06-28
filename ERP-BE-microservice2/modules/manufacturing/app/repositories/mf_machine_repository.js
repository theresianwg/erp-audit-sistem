const { mf_machine, fa_asset } = require('../../../../models');

class MachineRepository {
    async createMachine(data) {
        return await mf_machine.create(data);
    }
    async getAllMachine() {
        return await mf_machine.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getMachineById(id) {
        return await mf_machine.findOne({ where: { id } });
    }
    async getMachineByName(name) {
        return await mf_machine.findOne({ where: { name } });
    }
    async deleteMachineById(id) {
        return await mf_machine.destroy({ where: { id } });
    }
    async updateMachine(id, data) {
        return await mf_machine.update(data, { where: { id } });
    }
}

module.exports = new MachineRepository();
