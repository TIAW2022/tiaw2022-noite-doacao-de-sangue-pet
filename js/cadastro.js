var ListaPessoas = JSON.parse(localStorage.getItem("cadastroPessoas"));

if(!ListaPessoas) {
    
    ListaPessoas = []

}

function cadastrar() {

    var nome =  document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;

    var id = ListaPessoas.length;

    var novoCadastro =  {"id": id, "nome": nome, "sobrenome": sobrenome, "email": email, "telefone": telefone, "senha": senha}

    ListaPessoas.push(novoCadastro);
    localStorage.setItem("cadastroPessoas", JSON.stringify(ListaPessoas));

    alert("Cadastro realizado com sucesso");

}




