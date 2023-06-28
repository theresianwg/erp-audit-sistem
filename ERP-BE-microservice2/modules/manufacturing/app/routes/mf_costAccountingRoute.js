const router = require('express').Router();
const costAccountingController = require('../controllers/mf_costAccountingController');

router.get('/', costAccountingController.getAll);
router.get('/:id', costAccountingController.getById);

// router.post('/', costAccountingController.create);

// router.put('/:id', costAccountingController.update);

// router.delete('/:id', costAccountingController.delete);

module.exports = router;
