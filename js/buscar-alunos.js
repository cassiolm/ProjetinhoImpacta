var minhaDiv = document.querySelector('#exemplo');
var botaoCarregar = document.querySelector('#btn-carregar');

botaoCarregar.onclick = function(){
    // endereço da api
    // var url = "../data/alunos.txt";
    var url = "https://api.github.com/users/cassiolm";
   
    // criando um obj ajax
    var xhr = new XMLHttpRequest();

    // manipulando o status do objeto
    xhr.onreadystatechange = function(){


        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);

            var alunos = JSON.parse(this.responseText);
            console.log(this.responseText);

            // exibir os dados do objeto no html
            minhaDiv.innerHTML = "<p> RA: " +alunos.name+ "<br> Nome: " +alunos.bio+ "</p>"; 


        }

        //fim do xhr XMLHttpRequest
    }
        // abrir canal de comunicacao usando ajax
        xhr.open("GET", url, true);

        //envio das infos
        xhr.send();
}