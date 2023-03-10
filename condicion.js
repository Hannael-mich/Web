'use strict'

//Condicional IF
//Si A es igual a B entonces haz algo
var edad = 18;
var edad1 = 30;
var edad2 = 12;
var nombre = 'David Suarez'

if(edad1 != edad2){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if(edad<=33){
        console.log('Todavia eres millenial');
    }else{ 
        if(edad>=70){

            console.log("Eres anciano");
        }else{
            console.log('Ya no eres millenial'); 
        }
    }
}else{
    //Es menor de edad
    console.log(nombre+" tiene "+ edad+ "años, es MENOR  de edad");
    
}

var year = 2018;

