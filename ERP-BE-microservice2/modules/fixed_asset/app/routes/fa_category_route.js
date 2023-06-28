const CategoryController = require('../controllers/fa_category_controller');
const router = require('express').Router();

router.post('/', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getCategoryById);
router.get('/name/:name', CategoryController.getCategoryByName);
router.delete('/:id', CategoryController.deleteCategory);
router.put('/:id', CategoryController.updateCategory);

module.exports = router;
