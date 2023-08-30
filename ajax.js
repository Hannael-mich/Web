/*$(document).ready(function(){
    //Load
    //$("#datos").load("https://reqres.in/")

    //GET

    $.get("https://reqres.in/api/users?page=2", {page:3},function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.id+" "+element.email+" "+element.first_name+" "+element.last_name+"</p>");    
        });
    });    

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario ={
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });

        return false;
    });
});

$.ajax({
    method: "GET",
    url: "https://reqres.in/api/users?page=2"
  }).done(function(data) {
    alert(data); // imprimimos la respuesta
    console.log(data);
  }).fail(function() {
    alert("Algo salió mal");
  }).always(function() {
    alert("Siempre se ejecuta")
  })

  let conejo = {};

  conejo.hablar = function(linea){
    console.log(`El conejo dice ${linea}`);
  }

  conejo.hablar("Estoy vivo");


//var edad = 27
//if (edad) {
// var dobleDeEdad = edad + edad
//  console.log(`El doble de tu edad actual es ${dobleDeEdad}`)
//}*/

function hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
}
let conejoBlanco = {tipo: "blanco", hablar};
let conejoHambriento = {tipo: "hambriento", hablar};

conejoBlanco.hablar("Oh mis orejas y bigotes, " +
    "que tarde se esta haciendo!");
    // → El conejo blanco dice 'Oh mis orejas y bigotes, que
    // tarde se esta haciendo!'
conejoHambriento.hablar("Podria comerme una zanahoria ahora mismo.")
    ;
    // → El conejo hambriento dice 'Podria comerme una zanahoria ahora mismo
