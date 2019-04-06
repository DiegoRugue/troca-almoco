const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.controller');

router.get('/:id', controller.get);
router.post('/', controller.post);
router.post('/:user', controller.logar);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;