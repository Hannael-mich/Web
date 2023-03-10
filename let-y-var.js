'use strict'

//Pruebas con Let y var

var numero = 40;
console.log(numero); //valor 50

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero);

//Prueba con Let
var texto = "Curso JS victo";
console.log(texto);

if(true){
     let texto = "Curso Laravel 5 ";
     console.log(texto);
}

console.log(texto); 