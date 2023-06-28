const { GlCoa, GlCoaGroup, GlAccountType } = require('../../../../models');
const { Op } = require('sequelize');

class GlCoaRepository {
    async checkExistedCoaCode(code) {
        const checkBool = await GlCoa.findOne({
            where: {
                Coa_Number: code,
            },
        });
        return checkBool ? true : false;
    }
    async createCoa(data) {
        return await GlCoa.create(data);
    }
    async updateCoa(id, data) {
        return await GlCoa.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteCoa(id) {
        return await GlCoa.destroy({
            where: {
                id: id,
            },
        });
    }
    async getAccountTypeMembers(code) {
        const AT = await GlAccountType.findOne({
            where: {
                AT_Code: code,
            },
            attributes: ['id'],
        });
        return await GlCoa.findAll({
            where: {
                id_account_type: AT.id,
            },
            includes: [
                {
                    models: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                },
            ],
        });
    }
    async getCoaByCode(code) {
        return await GlCoa.findOne({
            where: {
                Coa_Number: code,
            },
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                            attributes: ['AT_Name', 'AT_Code'],
                        },
                    ],
                },
            ],
        });
    }
    async getCoaById(id) {
        return await GlCoa.findByPk(id, {
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                            attributes: ['AT_Name', 'AT_Code'],
                        },
                    ],
                },
            ],
        });
    }
    async getCoaByLastId() {
        const lastRecord = await GlCoa.findOne({
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                            attributes: ['AT_Name', 'AT_Code'],
                        },
                    ],
                },
            ],
        });
        return lastRecord.id;
    }
    async getCoaLastIdWithPrefix(prefix) {
        const lastRecord = await GlCoa.findOne({
            where: {
                Coa_Name: {
                    [Op.like]: `${prefix}%`,
                },
            },
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                            attributes: ['AT_Name', 'AT_Code'],
                        },
                    ],
                },
            ],
        });
        return lastRecord.id;
    }
    async getListCoaByGroup(code) {
        const CG = await GlCoaGroup.findOne({
            where: {
                CG_Code: code,
            },
            attributes: ['id'],
        });
        return await GlCoa.findAll({
            where: {
                id_coa_group: CG.id,
            },
            include: [
                {
                    model: GlAccountType,
                    attributes: ['AT_Name', 'AT_Code'],
                },
            ],
        });
    }
    async getWIPCoaByWorkcenter() {}
    async getWorkCenterProductionCostValue() {}
    async getAllCoa() {
        return await GlCoa.findAll({
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                        },
                    ],
                },
            ],
        });
    }
    async getAllCoaSort() {
        return await GlCoa.findAll({
            order: [['Coa_Number', 'ASC']],
            include: [
                {
                    model: GlCoaGroup,
                    attributes: ['CG_Name', 'CG_Code'],
                    include: [
                        {
                            model: GlAccountType,
                        },
                    ],
                },
            ],
        });
    }
}

module.exports = new GlCoaRepository();
