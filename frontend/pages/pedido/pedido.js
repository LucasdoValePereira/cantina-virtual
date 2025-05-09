window.onload = () => {
    const dados = sessionStorage.getItem("Pedido");
    if (dados) {
        const pedido = JSON.parse(dados);
        const div = document.getElementById("container");
    
        div.innerHTML = `
            ${pedido.map(p => `<div id="item">
                <h2>${p.item} - R$${p.preco}</h2>
                <button id="botaoRemover" onclick="removerItem(this)">Remover</button>
              </div>`).join("")}
        `;
    } else {
        console.warn("Nenhum pedido encontrado no sessionStorage.");
    }
};

function removerItem(botao){
    const divItem = botao.parentElement;
    divItem.remove();

    const dados = JSON.parse(sessionStorage.getItem("Pedido"));
    const nomeItem = divItem.querySelector("h2").textContent.split(" - ")[0];

    const index = dados.findIndex(p => p.item !== nomeItem);
    if(index !== -1){
      dados.splice(index, 1);
    }
    sessionStorage.setItem("Pedido", JSON.stringify(dados));
}

async function pegarSenha(){
    const dados = sessionStorage.getItem("Pedido");
    if(!dados){
        console.error("Nenhum dados encontrado");
        return;
    }

    const pedido = {
        itens: JSON.parse(dados)
    }

    try{
        const response = await fetch("http://localhost:3000/pedidos/gerar-senha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });

        if(!response.ok){
            throw new Error(`Erro ao gerar senha: ${response.status}`);
        }
        
        const resultado = await response.json();
        console.log("Senha gerada:", resultado);
        var senha = document.getElementById("senha");
        senha.innerText = `A senha é : ${resultado.senha}`;

        setTimeout(()=>{
            sessionStorage.removeItem("Pedido");
            window.location.href = "../home/index.html";
        }, 10000);
    }catch(err){
        console.error(`Erro ao enviar pedido:`, err);
    }    
}