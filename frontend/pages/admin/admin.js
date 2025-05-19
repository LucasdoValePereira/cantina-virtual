window.onload = async () =>{
    sessionStorage.clear();

    try{
        const response = await fetch("http://localhost:3000/pedidos/");
        const dados = await response.json();  
        if(dados){
            const container = document.getElementById("container");
            container.innerHTML = "";
            
            dados.forEach(pedido => {
                const itens = JSON.parse(pedido.itens);
                
                const divPedido = document.createElement("div");
                divPedido.className= "item";
                
                const listarItens = itens.map(i => `<li>${i.item} - R$${i.preco}</li>`).join("");
                divPedido.innerHTML = `
                    <h3>Pedido #${pedido.id} - Senha: ${pedido.senha} - Retirado: ${pedido.usado} - Total: R$${pedido.total}</h3>
                    <ul>${listarItens}</ul>
                `;
                container.appendChild(divPedido);
            })
            
        }
    }catch(err){
        console.error("Erro ao carregar pedidos");
    }
}

