const { GlAccountingPeriod } = require('../../../../models');
const { Op } = require('sequelize');

class GlAccountingPeriodRepository {
    async createAccountingPeriod(data) {
        return await GlAccountingPeriod.create(data);
    }
    async updateAccountingPeriod(id, data) {
        return await GlAccountingPeriod.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteAccountingPeriod(id) {
        return await GlAccountingPeriod.destroy({
            where: {
                id: id,
            },
        });
    }
    async getAccountingPeriodByDate(date) {
        return await GlAccountingPeriod.findAll({
            where: {
                AP_Start_Date: {
                    [Op.lt]: date,
                },
                AP_End_Date: {
                    [Op.gt]: date,
                },
            },
        });
    }
    async getAvailableClosingPeriod() {
        return await GlAccountingPeriod.findAll({
            where: {
                AP_End_Date: {
                    [Op.lt]: new Date(),
                },
            },
        });
    }
    async getAccountingPeriodById(id) {
        return await GlAccountingPeriod.findByPk(id);
    }
    async getAccountingPeriodLastId() {
        const lastRecord = await GlAccountingPeriod.findOne({
            order: [['id', 'DESC']],
        });
        return lastRecord.id;
    }
    async getPreviousAccountingPeriod(date) {
        return await GlAccountingPeriod.findAll({
            where: {
                AP_End_Date: {
                    [Op.lte]: date,
                },
            },
        });
    }
    async getAllAccountingPeriod() {
        return await GlAccountingPeriod.findAll();
    }
    async getAccountingPeriodSort() {
        return await GlAccountingPeriod.findAll({
            order: [['AP_Name', 'DESC']],
        });
    }
}

module.exports = new GlAccountingPeriodRepository();
