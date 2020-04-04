function contadordeClick(){
    if (typeof(Storage)!== "undefined"){
        if(sessionStorage.cont){
            sessionStorage.cont = Number(sessionStorage.cont) +1;

        }else {
            sessionStorage.cont = 1;
        }

        document.querySelector("#resultado").innerHTML = "Vc clicou no btn" +sessionStorage.cont + "vez(es) na sessão;";
} else{
    document.querySelector("#resultado").innerHTML = "o seu navegador nao suporta Web storage";
}
}