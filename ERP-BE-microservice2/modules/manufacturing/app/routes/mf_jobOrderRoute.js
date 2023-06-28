const router = require('express').Router();
const jobOrderController = require('../controllers/mf_jobOrderController');

router.get('/', jobOrderController.getAll);
router.get('/:id', jobOrderController.getDetail);

// router.get('/:id/detail', jobOrderController.getDetail);

router.post('/', jobOrderController.create);

router.put('/:id', jobOrderController.update);

// router.delete('/:id', jobOrderController.delete);

module.exports = router;
