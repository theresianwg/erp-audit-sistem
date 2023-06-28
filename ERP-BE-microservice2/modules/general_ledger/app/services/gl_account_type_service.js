const GlAccountTypeRepository = require('../repositories/gl_account_type_repository');

class GlAccountTypeService {
    //Primary Service
    async getAccountTypeById(id) {
        return await GlAccountTypeRepository.getAccountTypeById(id);
    }
    async createAccountType(data) {
        return await GlAccountTypeRepository.createAccountType(data);
    }
    async updateAccountType(id, data) {
        return await GlAccountTypeRepository.updateAccountType(id, data);
    }
    async deleteAccountType(id) {
        return await GlAccountTypeRepository.deleteAccountType(id);
    }
    async getAllAccountType() {
        return await GlAccountTypeRepository.getAllAccountType();
    }
    //Secondary Service
    async getAccountTypeByCode(code) {
        return await GlAccountTypeRepository.getAccountTypeByCode(code);
    }
    async getAccountLastId() {
        return await GlAccountTypeRepository.getAccountLastId();
    }
    async getAccountTypeLastIdWithPrefix(prefix) {
        return await GlAccountTypeRepository.getAccountTypeLastIdWithPrefix(
            prefix,
        );
    }
    async getListAccountType() {
        return await GlAccountTypeRepository.getListAccountType();
    }
    async getAllAccountTypeSort() {
        return await GlAccountTypeRepository.getAllAccountTypeSort();
    }
}

module.exports = new GlAccountTypeService();
