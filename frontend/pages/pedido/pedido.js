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