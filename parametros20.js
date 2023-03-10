'used strict'

// Parametros REST y SPREAD

function listaFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listaFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Naranja", "Manzana",];
listaFrutas( ...frutas, "Sandia", "Pera","Melon","Coco");