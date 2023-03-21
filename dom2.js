'use strict'

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja")

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector('#miseccion');
var hr = document.createElement("hr");
var valor;
//todosLosDivs.forEach((valor, indice) => {
for (valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document. createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").prepend(parrafo);
    }
    
}
seccion.append(hr);

//});

//console.log(contenidoEnTexto);