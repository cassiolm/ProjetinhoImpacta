console.log("teste");

$(document).ready(function () {
    var divImg = $("#img-exemplo");

    var btnSlideUp = $("#um");
    var btnSlideDown = $("#dois");
    var btnSlideToggle = $("#tres");
    var btnFadeOut = $("#quatro");
    var btnFadeIn = $("#cinco");
    var btnFadeToggle = $("#seis");

    btnSlideUp.click(function () {
        divImg.slideUp(2500);
    });

    btnSlideDown.click(function () {
        divImg.slideDown(2500);
    });

    btnSlideToggle.click(function () {
        divImg.slideToggle();
    });

    btnFadeOut.click(function () {
        divImg.fadeOut(2000, function () {
            //btnFadeOut.attr('disabled', true);
            //btnFadeOut.remove();
            btnFadeOut.addClass("desabilita");
        });
    });

    btnFadeIn.click(function () {
        divImg.fadeIn(2000, function () {
            //btnFadeOut.attr('disabled', false);
            btnFadeOut.removeClass("desabilita");
        });
    });

    btnFadeToggle.on("click", function () {
        divImg.fadeToggle(2000, function () {
            btnFadeToggle.toggleClass("desabilita");
        });
    });

    //var btnAnima = $('#animacao');
    $("#animacao").click(function () {
        $(".posicao")
            .animate({
                opacity: 0.3,
                left: "+=50px",
                height: "toggle",
            }, 2000, function () {
                console.log('apos 1 animate');
            })
            .animate({ opacity: 0.6 })
            .animate({ opacity: 0.8, width: "+=350px" }, 2000)
            .animate({ opacity: 1, width: "-=250px" });
    });


    // split()
    // pegando o conteudo de texto 
    var frase = $('#frase').text();
    // split separando as palavras por espaço e o length contando cada palavra
    var numPalavras = frase.split(' ').length;

    var tamFrase = $('#numero-palavras');
    // adicionando a var numPalavra dentro da var tamFrase.
    tamFrase.text(numPalavras);

    // Array retornado: ["João", "da", "Silva"]
    stringExemplo = "João da Silva Oliveira";
    resultado = stringExemplo.split(" ", 3);
    console.log(resultado);

    // Array retornado: ["Os ", " números ", " precisam ser ", " removidos"]
    stringExemplo = " Os 8000 números 345 precisam ser 1 removidos";
    resultado = stringExemplo.split(/\d+/);
    console.log(resultado);

});




