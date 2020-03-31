$('#slide-show > img:gt(0)').hide();

setInterval(function(){
$('#slide-show> img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide-show');
},3000);