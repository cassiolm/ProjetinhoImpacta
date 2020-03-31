$(document).ready(function(){
    var divImg = $('#img-exemplo');
    var btnSlideUp = $('#um');
    var btnSlideDown = $('#dois');
    var btnSlideToggle = $('#tres');
    var btnFadeOut = $('#quatro');
    var btnFadeIn = $('#cinco');
    var btnFadeToggle = $('#seis');

    btnSlideUp.click(function(){
        divImg.slideUp();

    });
    btnSlideDown.click(function(){
        divImg.slideDown()
    });

    btnSlideToggle.click(function(){
        divImg.slideToggle()
    });

    btnSlideToggle.click(function(){
        divImg.slideToggle()
    });
 
    btnFadeOut.click(function(){
        divImg.fadeOut(2000,function(){
            // btnFadeOut.attr('disabled', true);
            // btnFadeOut.remove();
            btnFadeOut.addClass('desabilita');
        })
    });
 
    btnFadeIn.click(function(){
        divImg.fadeIn(200, function(){
            //btnFadeOut.attr('disabled', false );
            btnFadeOut.removeClass('desabilita');
        });
    });
 
    btnFadeToggle.on('click',function(){
        divImg.fadeToggle(2300, function(){
        btnFadeToggle.toggleClass('desabilita');
        });
    });

    // var btnAnima = $('#animacao');

    $('#animacao').click(function(){
       $('.posicao').animate({
        opacity: 0.5,
        left: '+= 50px',
        height: 'toggle'
    }, 2000)
    .animate({ opacity:0.6})
    .animate({opacity:0.8, width:'+=350px'})
    .animate({opacity:1,width:'-=250px'})
    });

 //split()
// pegando o conteudo de texto
var frase = $('#frase').text();
// split separando as palavras por espaço e length contando cada palavra
var numPalavras = frase.split(' ').length;

var tamFrase = $('#numero-palavras');
// adicionando a var numPalavra dentro de tamFrase
tamFrase.text(numPalavras);
console.log(tamFrase);

});