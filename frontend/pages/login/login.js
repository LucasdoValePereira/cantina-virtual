async function entrar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    var dados = {
        usuario,
        senha
    };

    try{
        const response = await fetch("http://localhost:3000/admin/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if(!response.ok){
            throw new Error("Senha ou usuario errado ",response.status);
        }

        const resultado = await response.json();
        console.log(resultado);
        window.location.href = '../admin/admin.html';
    }catch(err){
        console.error("Erro ao fazer login: ", err);
    }
}