import Usuario from "./usuario.js"

let usuario1 = new Usuario("Diego Milito", "RacingCampeon", "milito_22@gmail.com");
let usuario2 = new Usuario("Pablo Guillermo", "RacingClub", "pablo@gmail.com");
let usuario3 = new Usuario("Centurion", "Merluza", "centurion@gmail.com");

localStorage.clear();

let usuarios = [usuario1, usuario2, usuario3];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

Usuario.Listado();

console.log(Usuario.Login("milito_22@gmail.com", "RacingCampeon"));
console.log(Usuario.Login("pablo@gmail.com", "fdsfsd"));
console.log(Usuario.Login("dsadas", "fdsfsd"));