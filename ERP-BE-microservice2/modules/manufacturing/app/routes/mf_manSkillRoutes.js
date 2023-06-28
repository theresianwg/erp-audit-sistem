const router = require('express').Router();
const manSkillController = require('../controllers/mf_manSkillController');

router.get('/', manSkillController.getAll);
router.get('/:id', manSkillController.getById);

router.post('/', manSkillController.create);

router.put('/:id', manSkillController.update);

router.delete('/:id', manSkillController.delete);

module.exports = router;
