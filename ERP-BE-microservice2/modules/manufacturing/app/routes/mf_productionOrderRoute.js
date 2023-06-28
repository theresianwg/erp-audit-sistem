const router = require('express').Router();
const productionOrderController = require('../controllers/mf_productionOrderController');

router.get('/', productionOrderController.getAll);
router.get('/:id', productionOrderController.getById);

router.post('/', productionOrderController.create);

router.put('/:id', productionOrderController.update);

router.delete('/:id', productionOrderController.delete);

module.exports = router;
