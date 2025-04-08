const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos');

router.get('/', produtosController.getAll);
router.post('/', produtosController.create);
router.put('/:id', produtosController.update);
router.delete('/:id', produtosController.delete);

module.exports = router;