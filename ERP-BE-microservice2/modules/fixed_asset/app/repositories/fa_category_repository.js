const { fa_category } = require('../../../../models');

class CategoryRepository {
    async createCategory(data) {
        return await fa_category.create(data);
    }
    async getAllCategory() {
        return await fa_category.findAll();
    }
    async getCategoryById(id) {
        return await fa_category.findOne({ where: { id } });
    }
    async getCategoryByName(name) {
        return await fa_category.findOne({ where: { name } });
    }
    async deleteCategory(id) {
        return await fa_category.destroy({ where: { id } });
    }
    async updateCategory(id, data) {
        return await fa_category.update(data, { where: { id } });
    }
}

module.exports = new CategoryRepository();
