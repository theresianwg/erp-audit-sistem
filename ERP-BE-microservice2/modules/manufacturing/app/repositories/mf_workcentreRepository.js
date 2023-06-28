const { MfWorkcentre } = require('../../../../models');

class WorkcentreRepository {
    async getAll() {
        return await MfWorkcentre.findAll();
    }

    async getById(id) {
        return await MfWorkcentre.findByPk(id);
    }

    async create(data) {
        const newMfWorkcentre = await MfWorkcentre.create(data);
        return newMfWorkcentre;
    }

    async update(id, MfWorkcentre) {
        return await MfWorkcentre.update(MfWorkcentre, { where: { id: id } });
    }

    async delete(id) {
        return await MfWorkcentre.destroy({ where: { id: id } });
    }
}

module.exports = new WorkcentreRepository();
