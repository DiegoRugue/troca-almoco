const express = require('express');
const router = express.Router();
const controller = require('../controllers/troca.controller');

router.get('/:id', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;