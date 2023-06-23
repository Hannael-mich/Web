let ast= "";
//Forma en la que yo lo hice 
    for(var j=0; j<7;j++){
        console.log(ast+="*");    
    }

//Forma en como viene resuelto en el libro
console.log("-------------------------------")
for (let line = "#"; line.length < 8; line += "#"){
    console.log(line);
}