const express = require('express');
const router = express.Router();
const apAdjustmentController = require('../controllers/ap_adjustment_controller');

router.post('/', apAdjustmentController.create);
router.get('/', apAdjustmentController.findAll);
router.get('/:id', apAdjustmentController.findById);
router.put('/:id', apAdjustmentController.update);
router.delete('/:id', apAdjustmentController.delete);

module.exports = router;
