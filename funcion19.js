'use strict'

//Funciones 
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora(numero1, numero2){
    // Conjunto de instrucciones a ejecutar 
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Divicion: "+ (numero1/numero2));
    console.log("****************");
}

//Invocar o llamar a la funcion

for(var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}