'use strict'

window.addEventListener('load',function(){

    //Timers

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set intervalo ejecutado");
    
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 1000);

        return tiempo;
    }

    //var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var tiempo = intervalo();

    var start = document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
});