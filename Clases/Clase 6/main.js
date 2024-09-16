import Usuario from "./usuario.js"

let usuario1 = Usuario.Registro("Malena", "PabloTeAmo", "malena@gmail.com");
let usuario2 = Usuario.Registro("Pablo", "MaleTeAmo", "pablo@gmail.com");
let usuario3 = Usuario.Registro("Centurion", "AguanteLaFalopa", "falopita@gmail.com");
let usuario4 = Usuario.Registro("Milito", "SoyCra", "milito@gmail.com");

let usuarios = [usuario1, usuario2, usuario3, usuario4];

localStorage.setItem("usuarios", usuarios);

Usuario.Listado();