const express = require('express');
const router = express.Router();
const controller = require('../controllers/cardapio.controller');

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;