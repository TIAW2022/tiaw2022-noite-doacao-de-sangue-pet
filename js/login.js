var ListaPessoas = JSON.parse(localStorage.getItem("cadastroPessoas"));


function login(){

    var email = document.getElementById('email-required-valid_email').value;
    var senha = document.getElementById('senha').value;
    var logado = "Não";

    for(i=0; i<ListaPessoas.length; i++ ) {
        const pessoa = ListaPessoas[i];

        if (pessoa.email == email && pessoa.senha == senha) {

            alert("Logado com sucesso");
            logado = "Sim";
            var id = pessoa.id;                       
        }

    }

    if(logado == "Não"){

    alert("Email ou senha inválido");

    }
    
}
















