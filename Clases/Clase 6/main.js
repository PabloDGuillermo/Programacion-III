import Usuario from "./usuario.js"

let usuario1 = new Usuario("Diego Milito", "RacingCampeon", "milito_22@gmail.com");
let usuario2 = new Usuario("Pablo Guillermo", "RacingClub", "pablo@gmail.com");
let usuario3 = new Usuario("Centurion", "Merluza", "centurion@gmail.com");

localStorage.clear(); //limpio el local storage por si hay basura guardada.

let usuarios = [usuario1, usuario2, usuario3];

console.log("\nComienzo de main.js");

localStorage.setItem("usuarios", JSON.stringify(usuarios)); //Guardo el array de usuarios en local storage como string

console.log("\nMuestro el listado de usuarios guardados en el localStorage:");
Usuario.Listado();

console.log("\nPruebas de Login:")
console.log(Usuario.Login("milito_22@gmail.com", "RacingCampeon"));
console.log(Usuario.Login("pablo@gmail.com", "fdsfsd"));
console.log(Usuario.Login("dsadas", "fdsfsd"));

console.log("\nFin de main.js");