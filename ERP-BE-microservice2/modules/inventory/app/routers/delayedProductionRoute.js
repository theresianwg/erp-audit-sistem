const DelayedProductionController = require('../controllers/delayedProductionController');
const router = require('express').Router();

router.get('/', DelayedProductionController.getAllDelayedProductionRequest);
router.get('/:id', DelayedProductionController.getDelayedProductionRequestById);
router.post('/', DelayedProductionController.createDelayedProductionRequest);
router.put('/:id', DelayedProductionController.updateDelayedProductionRequest);

module.exports = router;