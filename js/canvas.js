window.onload = function(){
    var c1 = document.querySelector("#c1");
    var ctx1 = c1.getContext("2d");
	
	var c2 = document.querySelector("#c2");
	var ctx2 = c2.getContext("2d");
	
	var img1 = new Image();
	img1.src="../imagens/rex.png";
	var img2 = new Image();
	img2.src="../imagens/rex.png";


    if(c1.getContext){
       console.log('Canvas iniciou');
       criaCanvas();
    }

    function criaCanvas(){
		imgCanvas(ctx1, img1, 80, 10, 372, 336);
		imgCanvas(ctx1, img2, 5, 180, 175, 152);
		criaCirculo(ctx1, 180, 275, 110, "rgba(0, 0, 255, 1)");
		criaCirculo(ctx1, 180, 275, 55, "rgba(0, 255, 0, 0.9)");
		criaRect(ctx1, 390, 40, 100, 300, "blue");
		criaRect(ctx1, 100, 10, 20, 150, "red");
		criaTxt(ctx1, 5, 300, "28px Verdana", "blue", "Rex" );
	}

	// IMAGEM
	function imgCanvas(ctx, img, x, y, w, h){
		img.onload = function(){
			//draWImage (img, posX, posY, Largura, Altura)
			ctx.drawImage(img, x, y, w, h);
			criaCirculo(ctx1, 400, 160, 25, "rgba(255,0,0,0.3)");
			criaTxt(ctx1, 180, 80, "55px Verdana", "blue", "Rex!");
		}
	}

	// cria circulo
	function criaCirculo(ctx, x, y, r, cor){
		ctx.beginPath();
		ctx.fillStyle = cor;
		ctx.lineWidth = 4;
		// arc(x, y, raio, anguloInicial, anguloFinal, rotação)
		ctx.arc(x, y, r, 0, Math.PI*2, true);
		ctx.fill();
	}

	// retangulo
	function criaRect(ctx, x, y, w, h, cor){
		ctx.fillStyle = cor;
		ctx.fillRect(x, y, w, h);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 10;
		ctx.strokeRect(x, y, w, h);
	}

	function criaTxt(ctx, x, y, font, cor, msg){
		ctx.font = font;
		ctx.fillStyle = cor;
		ctx.fillText(msg, x, y);
	}


	sorteioObjeto();
	// multiplos objt
	function sorteioObjeto(){
		for (var i = 0; i < 35; i++){

			var sorteioX = Math.random()*c2.width;
			var sorteioY = Math.random()*c2.clientHeight;
			var sorteioR = Math.random()*150;

			var red = parseInt(Math.random()*255);
			var green = parseInt(Math.random()*255);
			var blue = parseInt(Math.random()*255);

			var msgCor = red + "," +green+ "," + blue;
			criaCirculo(ctx2, sorteioX, sorteioY, sorteioR,  "rgba("+msgCor+", 0.6)");
			criaTxt(ctx2, sorteioX+10, sorteioY+10, "12px Gerorgia", "black", msgCor);
		}
	}
	
 // fim da func onload   
}
