//import Usuario from "./usuario";

const nombreElemento = document.getElementById("nombre");
const correoElemento = document.getElementById("correo");
const contraseniaElemento = document.getElementById("contraseña");
const terminosElemento = document.getElementById("box");
const errorElemento = document.getElementById("error");

const loginBtn = document.getElementById("Login");
const registroBtn = document.getElementById("Registro");

let mensajeError = "";
let nombre = "";
let correo = "";
let contrasenia = "";
let terminos = "";

loginBtn.onclick = Login;
registroBtn.onclick = Registro;

function obtenerValoresActuales() {
  nombre = nombreElemento.value;
  correo = correoElemento.value;
  contrasenia = contraseniaElemento.value;
  terminos = terminosElemento.checked;
}

function Login() {
  //paso 1: obtener los valores de los input
  //inputNombre.value = "hola" ---- Se puede asignar un valor también
  //console.log(inputNombre.value); //para leer el valor del input

  obtenerValoresActuales();

  if (terminos) {
    if (nombre !== "" && correo !== "" && contrasenia !== "") {
        mensajeError = Usuario.Login(correo, contrasenia);
    } else {
      mensajeError = "Complete los campos";
    }
  } else {
    mensajeError = "Debes aceptar los términos";
  }

  console.log(mensajeError);
  errorElemento.innerText = mensajeError;
  //paso 2: realizar el login de la clase usuario
  console.log("Estoy en el Login");
}

function Registro() {
  //paso 1: obtener los valores de los input
  obtenerValoresActuales();

  if (terminos) {
    if (nombre !== "" && correo !== "" && contrasenia !== "") {
      Usuario.Registro(nombre, contrasenia, correo);
      mensajeError = "Registrado!";
    } else {
      mensajeError = "Complete los campos";
    }
  } else {
    mensajeError = "Debes aceptar los términos";
  }

  console.log(mensajeError);
  errorElemento.innerText = mensajeError;
  //paso 2: realizar el registro de la clase usuario
  console.log("Estoy en el Registro");
}
