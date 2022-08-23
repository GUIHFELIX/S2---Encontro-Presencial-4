function logar(){

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(nome == "guifelix" && senha == "guifelix"){
        alert('Login com Sucesso');
        location.href = "telaLogin.html"
    }else{
        alert('Usuario ou senha incorretos');
    }

}