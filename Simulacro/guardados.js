import Serie from "./serie.js";

let acumuladorSeriesTraidas = 0;
let contadorSeriesTraidas = 0;
let arraySeries = [];

const elementoDivSeries = document.getElementById("series");
const elementoBotonOrdenarPorNombre = document.getElementById("botonOrdenarPorNombre");
const elementoBotonOrdenarPorID = document.getElementById("botonOrdenarPorID");

elementoBotonOrdenarPorNombre.addEventListener("click", () => ordenarPorNombre());
elementoBotonOrdenarPorID.addEventListener("click", () => ordenarPorID());

function obtenerLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let serieRecuperada = Serie.createFromJsonString(localStorage.getItem(localStorage.key(i)));
        arraySeries.push(serieRecuperada);
    }
}

function dibujarSerieEnPantalla(serie) {
    let elementoHTML = serie.createHtmlElement();

    let elementoBoton = elementoHTML.querySelector(`#boton${serie.id}`);
    elementoBoton.removeEventListener("click", () => Serie.guardarSerie(serie));
    elementoBoton.addEventListener("click", () => eliminarSerie(serie));
    elementoBoton.innerText = "Eliminar";

    elementoDivSeries.appendChild(elementoHTML);
}

window.onload = () => {
    obtenerLocalStorage();
    for (let i = 0; i < arraySeries.length; i++) {
        contadorSeriesTraidas += 1;
        acumuladorSeriesTraidas += 1;
        dibujarSerieEnPantalla(arraySeries[i]);
    }
};

function eliminarSerie(serie){
    if(prompt("desea eliminar la serie? (s/n)") === "s"){
        localStorage.removeItem(serie.id);
        elementoDivSeries.removeChild(document.getElementById(serie.id));
    };
}

function ordenarPorNombre(){
    arraySeries.sort((s1, s2) => {
        if(s1.name > s2.name){
            return 1;
        }else if(s1.name < s2.name){
            return -1;
        }else{
            return 0;
        }
    });
    reescribirPantalla(arraySeries);
}

function ordenarPorID(){
    arraySeries.sort((s1, s2) => {
        if(s1.id > s2.id){
            return 1;
        }else if(s1.id < s2.id){
            return -1;
        }else{
            return 0;
        }
    });
    reescribirPantalla(arraySeries);
}

function reescribirPantalla(arraySeries){
    let cantidadHijos = elementoDivSeries.childElementCount;
    console.log(elementoDivSeries.childElementCount);
    for(let i = 0; i< cantidadHijos; i++){
        console.log(`Paso ${i}` + " " + elementoDivSeries.childElementCount);
        elementoDivSeries.removeChild(elementoDivSeries.firstChild);
    }
    for(let i=0; i<arraySeries.length;i++){
        dibujarSerieEnPantalla(arraySeries[i]);
    }
}