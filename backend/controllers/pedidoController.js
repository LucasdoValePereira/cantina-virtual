const asyncHandler = require('express-async-handler')
const Pedido = require('../models/pedidoModel')

const criarPedido = asyncHandler(async(req , res)=>{
    const pedido = req.body;

    if(!pedido || !Array.isArray(pedido.itens)){
        res.status(400);
        throw new Error('Não tem pedido');
    }

    const total = pedido.itens.reduce((soma, item) => soma + item.preco, 0);
    const senha = Math.floor(1000 + Math.random() * 9000);
    console.log({ senha, itens: pedido.itens, total });
    const novoPedido = await Pedido.create({
        senha,
        itens: JSON.stringify(pedido.itens),
        total
    });
    res.json({senha});
});

const listarPedidos = asyncHandler(async(req,res)=>{
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
})

module.exports = {criarPedido, listarPedidos};