import Auto from "./auto.js";
import Garage from "./garage.js";

//Elementos HTML
const btnGuardarAuto = document.getElementById("btnGuardarAuto");
const colorElemento = document.getElementById("color");
const precioElemento = document.getElementById("precio");
const marcaElemento = document.getElementById("marca");
const fechaElemento = document.getElementById("fecha");
const ulListaDeAutos = document.getElementById("ulListadoDeAutos");
const divListadoDeAutos = document.getElementById("divListadoDeAutos");
const nodoPreInformacionGarage = document.createElement("pre");
const btnEliminarAuto = document.getElementById("btnEliminarAuto");
const inputEliminarElemento = document.getElementById("inputEliminarAuto");
const inputSeleccionarAuto = document.getElementById("seleccionarAuto");
const btnSeleccionarAuto = document.getElementById("btnSeleccionarAuto");
const btnModificarAuto = document.getElementById("btnModificarAuto");

//Creación de constantes
const garage = new Garage("E Racing", 3000);

//Creación de variables
let colorActual = "";
let precioActual = 0;
let marcaActual = "";
let fechaActual = "";

let autoSeleccionado;

//Funciones necesarias
function mostrarInformacionGarageEnPantalla(){
  divListadoDeAutos.insertBefore(nodoPreInformacionGarage, ulListaDeAutos);
  nodoPreInformacionGarage.textContent = garage.MostrarGarage();
}

function refrescarLista() {
  ulListaDeAutos.innerHTML = "";
  for (let i = 0; i < garage.Autos.length; i++) {
    let newNode = document.createElement("li");

    newNode.textContent = Auto.MostrarAuto(garage.Autos[i]);

    ulListaDeAutos.insertBefore(newNode, null);
  }
  nodoPreInformacionGarage.textContent = garage.MostrarGarage();
}

function obtenerLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let datosAutoRecuperado = JSON.parse(
      localStorage.getItem(localStorage.key(i))
    );

    let autoRecuperado = new Auto(
      datosAutoRecuperado.Color,
      datosAutoRecuperado.Precio,
      datosAutoRecuperado.Marca,
      datosAutoRecuperado.Fecha
    );

    garage.Add(autoRecuperado);
  }
}

function guardarAutosEnLocalStorage(){
  for(let i = 0; i < garage.Autos.length; i++){
    localStorage.setItem(garage.Autos[i].Marca, JSON.stringify(garage.Autos[i]));
  }
}

function eliminarAutoDelLocalStorage(auto){
  localStorage.removeItem(auto.Marca);
}

function eliminarAutoDelArray(auto){
  garage.Autos.splice(garage.Autos.indexOf(auto),1);
  eliminarAutoDelLocalStorage(auto);
}

mostrarInformacionGarageEnPantalla();
obtenerLocalStorage();
refrescarLista();

function obtenerValoresActuales() {
  colorActual = colorElemento.value;
  precioActual = Number.parseFloat(precioElemento.value);
  marcaActual = marcaElemento.value;
  fechaActual = new Date(fechaElemento.value);
}

function validarDatos() {
  if (
    colorActual !== "" &&
    precioActual > 0 &&
    marcaActual !== "" &&
    fechaActual instanceof Date
  ) {
    return true;
  }
  return false;
}

//Funcionalidad para el HTML
btnGuardarAuto.onclick = () => {
  obtenerValoresActuales();
  obtenerLocalStorage();
  if (validarDatos()) {
    let autoNuevo = new Auto(
      colorActual,
      precioActual,
      marcaActual,
      fechaActual
    );
    if (garage.Add(autoNuevo)) {
      console.log("Auto guardado en el garage");
      guardarAutosEnLocalStorage();
      refrescarLista();
    } else {
      console.log("El auto ya está guardado");
    }
  } else {
    console.log("Los datos están mal");
  }
};

btnEliminarAuto.onclick = () => {
  let autoSeleccionado;

  for(let i = 0; i< garage.Autos.length; i++){
    if(inputEliminarElemento.value === garage.Autos[i].Marca){
      autoSeleccionado = garage.Autos[i];
      break;
    }
  }

  eliminarAutoDelArray(autoSeleccionado);
  refrescarLista();
}

btnSeleccionarAuto.onclick = () =>{
  for(let i = 0; i< garage.Autos.length; i++){
    if(inputSeleccionarAuto.value === garage.Autos[i].Marca){
      autoSeleccionado = garage.Autos[i];
      break;
    }
  }
  
  colorElemento.value = autoSeleccionado.Color;
  precioElemento.value = autoSeleccionado.Precio;
  marcaElemento.value = autoSeleccionado.Marca;
  fechaElemento.value = autoSeleccionado.Fecha;

  marcaElemento.disabled = true;
}

btnModificarAuto.onclick = () =>{
  if(validarDatos()){
    autoSeleccionado.Color = colorActual;
    autoSeleccionado.Precio = PrecioActual;
    autoSeleccionado.Fecha = fechaActual;
  }
  marcaElemento.disabled = false;
}