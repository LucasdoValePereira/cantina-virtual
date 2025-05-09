const express = require('express');
const router = express.Router();
const {criarPedido, listarPedidos} = require('../controllers/pedidoController')

router.post('/gerar-senha', criarPedido);
router.get('/', listarPedidos);

module.exports = router;