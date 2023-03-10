'use strict'

// Funciones anonimas 
// Es una funcion que no tiene nombre

function sumame(numero1, numero2){
    var sumar = numero1 + numero2;

    return sumar;
}
//document.write(sumame(5, 7));
sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es:", (dato*2))
});

