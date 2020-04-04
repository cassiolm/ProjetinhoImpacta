// acessando o form
var form = document.querySelector('form');
var inputNome = document.querySelector('#nome');
var inputCor = document.querySelector('#cor');
var btnReset = document.querySelector('#limpar');

btnReset.onclick = function(){
    localStorage.clear();
    location.reload()
}

// processar o form
form.onsubmit = function(){
    // event.preventDefault(); // anula o comportamento padrao de reload (recarregamento da pag)

    var nome = inputNome.value;
    var cor = inputCor.value;

//armazenar os dados em localStorage
localStorage.setItem("dadoNome" , nome);
localStorage.setItem("dadoCor" , cor);


}

if( localStorage.getItem("dadoNome") != null && localStorage.getItem("dadoCor")!= null){
document.body.style.backgroundColor = localStorage.getItem("dadoCor");
document.querySelector('h2 span').textContent = localStorage.getItem("dadoNome");
}
