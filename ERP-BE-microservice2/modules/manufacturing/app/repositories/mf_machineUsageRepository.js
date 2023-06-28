const { MfMachineUsage } = require('../../../../models');

class MachineUsageRepository {
    async getAll() {
        return await MfMachineUsage.findAll();
    }

    async getById(id) {
        return await MfMachineUsage.findByPk(id);
    }

    async create(data) {
        const newMfMachineUsage = await MfMachineUsage.create(data);
        return newMfMachineUsage;
    }

    async update(id, MfMachineUsage) {
        return await MfMachineUsage.update(MfMachineUsage, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfMachineUsage.destroy({ where: { id: id } });
    }
}

module.exports = new MachineUsageRepository();
