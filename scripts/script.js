 const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confSenha");


function cadastrar(){
   const senhaValor = senha.value;
   const confirmarSenhaValor = confirmarSenha.value;

    if(senhaValor == confirmarSenhaValor){
        console.log("cadastrado com sucesso")
    }else{
        alert("As senhao não são iguais")
    }

}