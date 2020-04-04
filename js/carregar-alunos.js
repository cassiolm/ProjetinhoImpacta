function carregarLista(){
//endereco do webservice
    var url = "../data/alunos.json";

    //capturar os dados usando ajax com Jquery
    $.ajax({
        type:"GET",
        url: url,
        timeout:3000,
        datatype: 'JSON',
        contentType: "applications/json; charset=utf-8",
        cache:false,
        success: function (retorno){
            //retorna o JSON...
            var alunos = retorno;

            //listando os alunos
            $.each(alunos, function(i, aluno){
                var item = "<p> nome: " + aluno.nome+ "<br> curso: "+ aluno.curso+    "</p>";

                $('#lista-alunos').append(item);
            });
        }
    });


//fim da func ajax com jquery
}