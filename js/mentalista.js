window.onload = function () 
{
    var numeroSecreto = parseInt(Math.random() * 11);
        var objBotao = document.getElementById("botao");
        

            objBotao.onclick = function()
            {
                var valor = parseInt(document.getElementById("valor").value);
                var objResultado = document.getElementById("resultado");
                
                
                    if (valor == numeroSecreto) {
                        objResultado.innerHTML = "Acertou!";
                    } else if (valor < 0 || valor > 10) {
                        objResultado.innerHTML = "O número digitado deve estar entre 0 e 10";
                    }else if (valor < numeroSecreto){
                        objResultado.innerHTML = "Digite um número Maior";
                    } else if (valor > numeroSecreto) {
                        objResultado.innerHTML = "Digite um número Menor";
                    }else {
                        objResultado.innerHTML = "Errou!";
                    }  
            } 
    valor.onfocus = function () {
    valor.value = "";
    }   
}