const {
    MfCostAccounting,
    MfCostAccountingDetail,
    MfProductionOrder
} = require('../../../../models');

class CostAccountingRepository {
    async getAll() {
        return await MfCostAccounting.findAll();
    }

    async getById(id) {
        return await MfCostAccounting.findByPk(id);
    }
    async getLatest() {
        return await MfCostAccounting.findOne({
            include:[{
                model: MfProductionOrder
            }],
            order: [['createdAt', 'DESC']],
        });
    }
    async createCostAccounting(data) {
        const newMfCostAccounting = await MfCostAccounting.create(data);
        return newMfCostAccounting;
    }

    async createCostAccountingDetail(data) {
        const newMfCostAccountingDetail = await MfCostAccountingDetail.create(
            data,
        );
        return newMfCostAccountingDetail;
    }

    async update(id, data) {
        return await MfCostAccounting.update(data, {
            where: { id: id },
        });
    }

    async delete(id) {
        return await MfCostAccounting.destroy({ where: { id: id } });
    }
}

module.exports = new CostAccountingRepository();
