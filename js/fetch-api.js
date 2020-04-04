var minhaDiv = document.querySelector('#exemplo');
var botaoCarregar = document.querySelector('#carregar');

botaoCarregar.onclick = function(){

// endereco webservice
var url = "https://api.github.com/users/cassiolm";

fetch(url).then(function(resposta) {
    return resposta.json()  
})
.then(function(dados){
    console.log(dados);
    minhaDiv.innerHTML = '<p> bio do github: ' +dados.bio+ '</p>'

}
);


}


















