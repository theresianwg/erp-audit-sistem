const { MfMan } = require('../../../../models');

class ManRepository {
    async getAll() {
        return await MfMan.findAll();
    }

    async getById(id) {
        return await MfMan.findByPk(id);
    }

    async create(data) {
        const newMfMan = await MfMan.create(data);
        return newMfMan;
    }

    async update(id, MfMan) {
        return await MfMan.update(MfMan, { where: { id: id } });
    }

    async delete(id) {
        return await MfMan.destroy({ where: { id: id } });
    }
}

module.exports = new ManRepository();
