const {
    GlCoaGroup,
    GlAccountType,
    GlCoa
} = require('../../../../models');
const { Op } = require('sequelize');

class GlCoaGroupRepository {
    async createCoaGroup(data) {
        return await GlCoaGroup.create(data);
    }
    async updateCoaGroup(id, data) {
        return await GlCoaGroup.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteCoaGroup(id) {
        return await GlCoaGroup.destroy({
            where: {
                id: id,
            },
        });
    }
    async getCoaGroupByCode(code) {
        return await GlCoaGroup.findOne({
            where: {
                CG_Code: code,
            },
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
    }
    async getCoaGroupById(id) {
        return await GlCoaGroup.findByPk(id, {
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
                {
                    model: GlCoa
                }
            ],
        });
    }
    async getCoaGroupByLastId() {
        const lastRecord = await GlCoaGroup.findOne({
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
        return lastRecord.id;
    }
    async getCoaGroupLastIdWithPrefix(prefix) {
        const lastRecord = await GlCoaGroup.findOne({
            where: {
                CG_Name: {
                    [Op.like]: `${prefix}%`,
                },
            },
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
        return lastRecord.id;
    }
    async getListCoaGroupMembers() {
        return await GlCoaGroup.findAll({
            attributes: ['CG_Name'],
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
    }
    async getListCoaGroupByAccType(code) {
        const AT = await GlAccountType.findOne({
            where: {
                AT_Code: code,
            },
            attributes: ['id'],
        });
        return await GlCoaGroup.findAll({
            where: {
                id_account_type: AT.id,
            },
        });
    }
    async getAllCoaGroup() {
        return await GlCoaGroup.findAll({
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
    }
    async getAllCoaGroupSort() {
        return await GlCoaGroup.findAll({
            order: [['CG_Code', 'ASC']],
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
    }
}

module.exports = new GlCoaGroupRepository();
