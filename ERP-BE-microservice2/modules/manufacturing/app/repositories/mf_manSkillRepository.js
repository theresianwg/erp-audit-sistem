const { MfManSkill } = require('../../../../models');

class ManSkillRepository {
    async getAll() {
        return await MfManSkill.findAll();
    }

    async getById(id) {
        return await MfManSkill.findByPk(id);
    }

    async create(data) {
        const newMfManSkill = await MfManSkill.create(data);
        return newMfManSkill;
    }

    async update(id, MfManSkill) {
        return await MfManSkill.update(MfManSkill, { where: { id: id } });
    }

    async delete(id) {
        return await MfManSkill.destroy({ where: { id: id } });
    }
}

module.exports = new ManSkillRepository();
