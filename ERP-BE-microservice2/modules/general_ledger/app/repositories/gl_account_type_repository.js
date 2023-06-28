const { GlAccountType } = require('../../../../models');
const { Op } = require('sequelize');

class GlAccountTypeRepository {
    async createAccountType(data) {
        return await GlAccountType.create(data);
    }
    async updateAccountType(id, data) {
        return await GlAccountType.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteAccountType(id) {
        return await GlAccountType.destroy({
            where: {
                id: id,
            },
        });
    }
    async getAllAccountTypeNumber(number) {}
    async getAccountTypeByCode(code) {
        return await GlAccountType.findOne({
            where: {
                AT_Code: code,
            },
        });
    }
    async getAccountTypeById(id) {
        return await GlAccountType.findByPk(id);
    }
    async getAccountLastId() {
        const lastRecord = await GlAccountType.findOne({
            order: [['id', 'DESC']],
        });
        return lastRecord.id;
    }
    async getAccountTypeLastIdWithPrefix(prefix) {
        const lastRecord = await GlAccountType.findOne({
            where: {
                AT_Name: {
                    [Op.like]: `${prefix}%`,
                },
            },
            order: [['id', 'DESC']],
        });
        return lastRecord.id;
    }
    async getListAccountType() {
        return await GlAccountType.findAll({
            attributes: ['AT_Name'],
        });
    }
    async getAllAccountType() {
        return await GlAccountType.findAll();
    }
    async getAllAccountTypeSort() {
        return await GlAccountType.findAll({
            order: [['AT_Code', 'ASC']],
        });
    }
}

module.exports = new GlAccountTypeRepository();
