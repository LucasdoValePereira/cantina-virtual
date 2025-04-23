let pedidos = [];

function adicionarItem(item, preco){
    pedidos.push({item, preco})
    console.log(item + " adicionado")
}

function mostrarPedidos(){
    console.log(pedidos)
}

