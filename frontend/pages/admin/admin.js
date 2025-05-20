window.onload = async () =>{
    sessionStorage.clear();

    try{
        const response = await fetch("http://localhost:3000/pedidos/");
        const dados = await response.json();  
        if(dados && dados.length > 0){
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
                    <button id="botaoAlterar" onclick="alterarStatus(${pedido.id})">Alterar Status</button>
                `;
                container.appendChild(divPedido);
            })
            
        }else{
            const container = document.getElementById("container");
            container.innerText = "Não tem nenhum pedido";
        }
    }catch{
        const container = document.getElementById("container");
        container.innerText = "Erro ao carregar pedidos";
        console.error("Erro ao carregar pedidos");
    }
}

async function alterarStatus(id){
    console.log("Alterando status do pedido ID:", id);
    try{
        const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
            method: "PUT",
        })
        const result = await response.json();
        console.log(result)
        window.onload();
    }catch(err){
        console.error("Erro ao alterar status:", err);
    }
}