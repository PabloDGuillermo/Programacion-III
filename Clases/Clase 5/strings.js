console.log("\n\nMétodos de strings!!");

function mostrar(cadena){
    console.log(cadena);
}

let cadena = "Agustín";

mostrar(cadena); //Muestra la cadena completa
mostrar(cadena[2]); //Muestra una sola letra
mostrar(cadena.length); //Muestra el largo de la cadena
mostrar(cadena.slice(0, 4)); //Corta la cadena donde nosotros querramos
mostrar(cadena.trim()); //Saca los espacios del principio y del final
mostrar(cadena.split(" ")); //Divide la cadena segun el separador que le digamos, en este caso "espacio"
mostrar(cadena.replace("Agus", "AAAA")); //Reemplaza lo que le digamos en el primer parámetro por el segundo 



