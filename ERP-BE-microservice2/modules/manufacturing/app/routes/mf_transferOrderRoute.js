const router = require('express').Router();
const transferOrderController = require('../controllers/mf_transferOrderController');

router.get('/', transferOrderController.getAll);
router.get('/:id', transferOrderController.getById);

router.post('/', transferOrderController.create);

router.put('/:id', transferOrderController.update);

router.delete('/:id', transferOrderController.delete);

module.exports = router;
