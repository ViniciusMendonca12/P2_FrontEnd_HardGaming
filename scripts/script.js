 const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confSenha");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");


function cadastrar(){
   const senhaValor = senha.value;
   const confirmarSenhaValor = confirmarSenha.value;
   const usuarioValor = usuario.value;
   const emailvalor = email.value;


    if(senhaValor.length < 1 && confirmarSenhaValor.length < 1 && usuarioValor.length < 1 && emailvalor.length < 1 &&){
        alert("Você deve Preencher todos os campos!!")
    }else if( usuarioValor < 1){
        alert("Preencha as outras informações!!")
    }else if( emailvalor < 1){
        alert("Preencha as outras informações!!")

    }else if(senhaValor.length < 1 && confirmarSenhaValor.length < 1){
        alert("As senhas não devem ser nulas!!!")
    }else if( senhaValor == confirmarSenhaValor){
        alert("Cadastrado com sucesso!!")
    }else{
        alert("As senhas não são iguais!!!")
    }
    
}