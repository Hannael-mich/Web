'use strict'

var categorias = ['Accion','Terror','Comedi'];
var peliculas = ['La verdad duele', 'La vida es bella','Gran torino'];

var cine = [categorias, peliculas];

//var elemento = prompt("Introduce tu pelicula");


/*do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while (elemento != "ACABAR");
*/
var indice = peliculas.indexOf('Gran torino');

if(indice >-1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();

console.log(peliculas_string);