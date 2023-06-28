const GlBudgetControlRepository = require('../repositories/gl_budget_control_repository');

class GlBudgetControlService {
    async createBudgetControl(data) {
        return await GlBudgetControlRepository.createBudgetControl(data);
    }
    async updateBudgetControl(id, data) {
        return await GlBudgetControlRepository.updateBudgetControl(id, data);
    }
    async deleteBudgetControl(id) {
        return await GlBudgetControlRepository.deleteBudgetControl(id);
    }
    async getBudgetControlById(id) {
        return await GlBudgetControlRepository.getBudgetControlById(id);
    }
    async getBudgetControlByLastId() {
        return await GlBudgetControlRepository.getBudgetControlByLastId();
    }
    async getAllBudgetControl() {
        return await GlBudgetControlRepository.getAllBudgetControl();
    }
    async getAllBudgetControlSort() {
        return await GlBudgetControlRepository.getAllBudgetControlSort();
    }
}

module.exports = new GlBudgetControlService();
