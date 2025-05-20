const express = require('express');
const router = express.Router();
const {criarPedido, listarPedidos, alterarStatus} = require('../controllers/pedidoController')

router.post('/gerar-senha', criarPedido);
router.get('/', listarPedidos);
router.put('/:id', alterarStatus);

module.exports = router;