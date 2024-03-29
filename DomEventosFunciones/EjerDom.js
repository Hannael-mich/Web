'use strict'
 
window.addEventListener('load',function(){
    console.log("DOM cargado!!!");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit',function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        
        if(nombre.trim() == null || nombre.trim().length == 0 ){
            console.log("El nombre no es valido");
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML ="El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0 ){
            alert("El apellido no es valido");
            return false;
        }
        console.log(edad);
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("El edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        //console.log(nombre, apellidos, edad);
        
        
        /*var datos_usuario = [nombre, apellidos, edad];
        var indice;
        for (indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */

    });
});