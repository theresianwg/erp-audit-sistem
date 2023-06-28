'use strict';

const express = require('express');
const router = express.Router();
const LogBookController = require('../controllers/LogBookController');

router.get('/', LogBookController.getAllLogBooks);
router.get('/:id', LogBookController.getLogBookById);
router.post('/', LogBookController.createLogBook);
router.put('/', LogBookController.updateLogBook);
router.delete('/', LogBookController.deleteLogBook);

module.exports = router;
