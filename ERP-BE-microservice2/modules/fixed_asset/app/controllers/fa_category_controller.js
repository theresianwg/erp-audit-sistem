const CategoryService = require('../services/fa_category_service');

class CategoryController {
    async createCategory(req, res) {
        try {
            const data = req.body;
            const category = await CategoryService.createCategory(data);

            res.status(201).json({
                message: 'Asset created successfully',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllCategory(req, res) {
        try {
            const category = await CategoryService.getAllCategory();
            res.status(200).json({
                message: 'Get all category',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getCategoryById(req, res) {
        try {
            const id = req.params.id;
            const category = await CategoryService.getCategoryById(id);
            res.status(200).json({
                message: 'Get category by id',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getCategoryByName(req, res) {
        try {
            const name = req.params.name;
            const category = await CategoryService.getCategoryByName(name);
            res.status(200).json({
                message: 'Get category by name',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteCategory(req, res) {
        try {
            const id = req.params.id;
            const category = await CategoryService.deleteCategory(id);
            res.status(200).json({
                message: 'Delete category by id',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateCategory(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const category = await CategoryService.updateCategory(id, data);
            res.status(200).json({
                message: 'Update category by id',
                data: category,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new CategoryController();
