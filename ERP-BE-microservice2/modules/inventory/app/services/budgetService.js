const BudgetRepository = require('../repositories/budgetRepository');

class BudgetService {
    async getBudgetByCoaId(id) {
        try {
            const budget = await BudgetRepository.getBudgetByCoaId(id);
            return budget;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new BudgetService();
