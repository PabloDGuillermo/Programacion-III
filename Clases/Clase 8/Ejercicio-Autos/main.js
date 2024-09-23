import Auto from "./auto.js";
import Garage from "./garage.js";

const btnGuardarAuto = document.getElementById("btnGuardarAuto");
const colorElemento = document.getElementById("color");
const precioElemento = document.getElementById("precio");
const marcaElemento = document.getElementById("marca");
const fechaElemento = document.getElementById("fecha");
const ulListaDeAutos = document.getElementById("listadoDeAutos");

const garage = new Garage("E Racing", 3000);

let colorActual = "";
let precioActual = 0;
let marcaActual = "";
let fechaActual = "";

function refrescarLista() {
  let flag = false;
  for (let i = 0; i < garage.Autos.length + 1; i++) {
    let newNode = document.createElement("li");
    ulListaDeAutos.insertBefore(newNode, null);
    if (!flag) {
      newNode.textContent = garage.MostrarGarage();
      flag = true;
    } else {
        let datosAutoRecuperado = JSON.parse(
            localStorage.getItem(localStorage.key(i))
          );
      
          let autoRecuperado = new Auto(
            datosAutoRecuperado.Color,
            datosAutoRecuperado.Precio,
            datosAutoRecuperado.Marca,
            datosAutoRecuperado.Fecha
          );
          newNode.textContent = Auto.MostrarAuto(autoRecuperado);
    }
  }
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
      localStorage.setItem(autoNuevo.Marca, JSON.stringify(autoNuevo));
      refrescarLista();
    } else {
      console.log("El auto ya está guardado");
    }
  } else {
    console.log("Los datos están mal");
  }
};
