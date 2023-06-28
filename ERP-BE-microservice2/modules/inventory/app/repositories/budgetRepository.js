const { GlBudgetControl } = require('../../../../models');

class BudgetRepository {
    async getBudgetByCoaId(id) {
        return await GlBudgetControl.findOne({
            where: {
                id_coa: id,
            },
            order: [['id_accounting_period', 'DESC']],
            attributes: ['BC_Amount', 'id_coa', 'id_accounting_period'],
        });
    }
}

module.exports = new BudgetRepository();
