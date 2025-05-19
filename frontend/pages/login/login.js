async function entrar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var menssagem = document.getElementById("message");

    var dados = {
        usuario: usuario.value,
        senha: senha.value
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
            usuario.value = "";
            senha.value = "";
            menssagem.innerText= "Usuário ou senha estão incorretos"
            throw new Error("Senha ou usuario errado ",response.status);
            
        }

        const resultado = await response.json();
        console.log(resultado);
        window.location.href = '../admin/admin.html';
    }catch(err){
        console.error("Erro ao fazer login: ", err);
    }
}