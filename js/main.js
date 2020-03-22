//acessa o h3
var titulo = document.querySelector('h3');
// troca o titulo do h3 ˆ
titulo.textContent = 'Lista de Alunos';

var botaoAdicionaAluno = document.querySelector('#adicionar-aluno');

botaoAdicionaAluno.addEventListener('click', function(){
    // previne o comportamento padrão que é recarregar a página
    event.preventDefault();
    //acessando o form
    var form = document.querySelector('#form-adiciona');

    // para acessar o valor do input, utilizamos o value
    var nome = form.nome.value;
    var curso = form.curso.value;
    var nota = form.nota.value;
    var status = form.status.value.toLowerCase();

    // criar elemento tr
    var alunoTr = document.createElement('tr');

    //criando tds
    var nomeTd = document.createElement('td'),
    cursoTd = document.createElement('td'),
    notaTd = document.createElement('td'),
    statusTd = document.createElement('td');    

    // inserindo o value do input na td
    nomeTd.textContent = nome;
    cursoTd.textContent = curso;
    notaTd.textContent = nota;
    statusTd.textContent =  status;

    // montar a tr e add como elemento filho

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(cursoTd);
    alunoTr.appendChild(notaTd);
    alunoTr.appendChild(statusTd);
    
    console.log(alunoTr);

    // acesso a tabela
    var tabela = document.querySelector('#tabela-aluno');
    
    //add tr completo na tabela
    tabela.appendChild(alunoTr);


    if ( nota >= 6) {
        notaTd.classList.add('aprovado');
    } else {
        notaTd.classList.add('reprovado');
    }

    if (status =='ativo'){
        statusTd.classList.add('aprovado');
    } else if(status =='inativo'){
        statusTd.classList.add('reprovado');
    }else{
        statusTd.textContent = 'Não definido';
        statusTd.classList.add('reprovado');
    }

    // adicionar o combobox / input radio para a verificaçao do status
    form.reset();

    nomeTd.setAttribute('required')
    cursoTd.setAttribute('required')
    notaTd.setAttribute('required')
    statusTd.setAttribute('required')

    // console.log(removeAluno);
    // console.log(nomeTd);
    // console.log(nome);

    console.log("ao click");
});

console.log('teste fim');

var removeAluno = document.querySelector('table');
removeAluno.addEventListener('dblclick', function(e){
    console.log(e.target);
    //parentNode / Nó pai
    e.target.parentNode.classList.add('fadeOut');   
    //remover com um callback
    setTimeout(function(){
        e.target.parentNode.remove();
    }, 500);
});