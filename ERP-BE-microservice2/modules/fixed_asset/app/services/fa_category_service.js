const CategoryRepository = require('../repositories/fa_category_repository');
const { generateAssetCategoryId } = require('../utils/generateId');
class CategoryService {
    async createCategory(data) {
        // const allCategory = await CategoryRepository.getAllCategory();
        // const size = allCategory.length;
        // console.log(allCategory);
        // console.log(size);
        return await CategoryRepository.createCategory({
            id: generateAssetCategoryId(),
            ...data,
        });
    }
    async getAllCategory() {
        return await CategoryRepository.getAllCategory();
    }
    async getCategoryById(id) {
        return await CategoryRepository.getCategoryById(id);
    }
    async getCategoryByName(name) {
        return await CategoryRepository.getCategoryByName(name);
    }
    async deleteCategory(id) {
        return await CategoryRepository.deleteCategory(id);
    }
    async updateCategory(id, data) {
        return await CategoryRepository.updateCategory(id, data);
    }
}

module.exports = new CategoryService();
