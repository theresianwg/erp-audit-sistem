const { MfIssueMaterial } = require('../../../../models');

class IssueMaterialRepository {
    async getAll() {
        return await MfIssueMaterial.findAll();
    }

    async getById(id) {
        return await MfIssueMaterial.findByPk(id);
    }

    async create(data) {
        const newMfIssueMaterial = await MfIssueMaterial.create(data);
        return newMfIssueMaterial;
    }

    async update(id, data) {
        return await MfIssueMaterial.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfIssueMaterial.destroy({ where: { id: id } });
    }
}

module.exports = new IssueMaterialRepository();
