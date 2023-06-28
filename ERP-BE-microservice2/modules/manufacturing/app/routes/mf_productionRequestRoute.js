const router = require('express').Router();
const productionRequestController = require('../controllers/mf_productionRequestController');

router.get('/', productionRequestController.getAll);
router.get('/:id', productionRequestController.getById);

router.post('/', productionRequestController.create);

router.put('/:id', productionRequestController.update);

router.delete('/:id', productionRequestController.delete);

module.exports = router;
