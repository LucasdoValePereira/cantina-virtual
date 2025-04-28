let pedido = [];

const pedidoSalvo = sessionStorage.getItem("Pedido");
if (pedidoSalvo) {
    pedido = JSON.parse(pedidoSalvo);
}

function adicionarItem(item, preco){
    pedido.push({item, preco})
    console.log(item + " adicionado")
    
    sessionStorage.setItem("Pedido", JSON.stringify(pedido))
    mostrarPedido()
}

function mostrarPedido(){
    console.log(pedido)
}

